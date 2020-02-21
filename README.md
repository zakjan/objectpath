# objectpath

Expression language for querying JSON objects, based on formal ANTLR4 grammar. It can be easily ported into any target language. Test usecases are shared to ensure consistent results. Currently implemented in TS, Java

## Syntax

The basic syntax is compatible with [lodash.get](https://lodash.com/docs#get). A simple syntax for simple cases, yet supporting more complex cases.

Supported features:

- root / current object references
  - root object - `$`
  - current object - `@`
    - leading object reference can be omitted, defaults to current object `@`<br>
      `field`<br>
      `[0]`<br>
      `['a field']`<br>
      `filter(field == 'X')`<br>
      `map(field)`
- access expressions
  - dot access<br>
    `object.field`
  - bracket access<br>
    `array[0]`<br>
    `array[-1]`<br>
    `object['a field']`
  - array filter<br>
    `array.filter(field == 'X')`<br>
    `array.filter($.rootField == 'X')`<br>
    `array.filter(field == 'X' && array.filter(field == 'Y'))`
  - array map<br>
    `array.map(field)`<br>
    `array.map(@ * 2)`
- operators (by priority)
  - unary - `+` `-`
  - unary logical NOT - `!`
  - multiplicative - `*` `/`
  - additive - `+` `-`
  - equality - `==` `!=`
  - relational - `<` `>` `<=` `>=`
  - logical AND - `&&`
  - logical OR - `||`
  - conditional - `?:`
- custom functions<br>
  `join`<br>
  `split`<br>
  `sum`<br>
  `dateTimestampToIsoString` (returns date ISO string `YYYY-MM-DD'T'HH:mm:ss.SSSX`)<br>
  `dateIsoStringToTimestamp` (accepts any valid date ISO string)
- primitives - string, number, boolean, null

Logical operators can be used with operands that are not boolean values: `falseField || trueField` returns `trueField`

See detailed examples in [test](test) directory.

**Parsing errors**

In case of parsing errors, function `getByPath` silently catches the error and returns `null`. If you wish to handle the error on your own, call `parsePath` and `getByParsedPath` separately.

**Boolean truth table**

`false`, `null`, `undefined` evaluates to `false`, everything else evaluates to `true`. This differs from JS, which evaluates `0`, `''` also to `false`.

**Strict equality**

Equality operator `==` uses strict equality, `===` in JS, `Object.equals` in Java.

**Null vs. undefined**

In case of non-existing property, `null` is returned. This is because `undefined` is a JS-only construct, it even can't be stored in JSON.

**TODO**

- publish to package managers (npm, Maven)
- array slicing
- explore if also AST visitor can be generated from an universal language

## Why yet another library?

Other libraries are either missing more advanced extracting features or don't have consistent implementation across multiple languages.

**JSONPath**

- *(blocker)* doesn't use array filter result as context for further traversing, see https://github.com/json-path/JsonPath/issues/272
- *(blocker)* language-specific implementations are completely separate, they differ slightly in edge cases
- requires unintuitive `$.` in begining

**XPath**

- *(blocker)* language-specific implementations are completely separate
- too different from JS syntax

**SpEL**

- *(blocker)* language-specific implementations are completely separate

**lodash.get, JSONata, JSPath, dot-prop**

- missing more advanced features

**jq**

- only C implementation

## Development

ANTLR4 grammar is used to formally describe the syntax and to generate string-to-AST parser. AST visitor is written manually, but in a consistent code style across languages. This is to enable easy porting into new target language.

**Directories**

- `grammar` - ANTLR4 grammar
- `objectpath-*` - language-specific implementation, with directory structure and package definition following langauage standards
  - `parser` - generated ANTLR4 string-to-AST parser
  - `visitor` - AST visitor and custom visitor functions
  - `GetByPath.*` - entry point to the library, contains main function `getByPath`
- `test` - test usecases

**Dependencies**

Dependencies for each language-specific implementation are managed by their respective package manager tools.

- `objectpath-ts` - npm
- `objectpath-java` - Maven

*(optional)* For direct CLI access to ANTLR4 compiler, download [Complete ANTLR Java binaries jar (antlr-4.7.2-complete.jar)](http://www.antlr.org/download.html). Useful aliases:

```
alias antlr4='java -cp ".:/usr/local/lib/antlr-4.7.2-complete.jar:$CLASSPATH" org.antlr.v4.Tool'
alias grun='java -cp ".:/usr/local/lib/antlr-4.7.2-complete.jar:$CLASSPATH" org.antlr.v4.gui.TestRig'
```

**Updating ANTLR4 grammar, parser**

When updating ANTLR4 grammar, run `./generate-parser.sh` to generate parsers in all target languages. **Don't edit parsers manually!** Then update AST visitors in each language respectively.

For visualizing AST, ANTLR IntelliJ plugin is recommended. Open `grammar/ObjectPath.g4`, right-click `start` rule, select "Test ANTLR rule", enter the input string into the left window, observe parse tree in the right window.

![ANTLR IntelliJ plugin - start](docs/antlr-intellij-plugin-start.png)
![ANTLR IntelliJ plugin - result](docs/antlr-intellij-plugin-result.png)

*The other option is `grun` tool. But it doesn't support grammar file and compiled Java files in separate directories, you'd need to disable `-package` option and output the parser to the same directory with grammar in `objectpath-java/generate-parser.sh`.*

**Updating AST visitor**

When updating AST visitor (`GetByPath.*`, `GetByPathVisitor.*`, `GetByPathVisitorFunctions.*`), keep them as close as possible in all languages. Although this might lead to code that is not idiomatic to the given language, it allows straightforward porting of new features.
