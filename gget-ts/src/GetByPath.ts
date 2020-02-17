import { BailErrorStrategy } from "antlr4ts/BailErrorStrategy";
import { CharStreams } from "antlr4ts/CharStreams";
import { CommonTokenStream } from "antlr4ts/CommonTokenStream";
import { ObjectPathParser } from "./parser/ObjectPathParser";
import { ObjectPathLexer } from "./parser/ObjectPathLexer";
import { GetByPathVisitor } from "./visitor/GetByPathVisitor";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { ParseCancellationException } from "antlr4ts/misc/ParseCancellationException";

export function parsePath(path: string): ParseTree {
    // create lexer and parser
    const charStream = CharStreams.fromString(path);
    const lexer = new ObjectPathLexer(charStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new ObjectPathParser(tokenStream);

    // don't attempt to recover from any parsing error
    parser.errorHandler = new BailErrorStrategy();

    // parse path into tree
    // throws ParseCancellationException in case of parsing error
    return parser.start();
}

export function getByParsedPath(data: unknown, parsedPath: ParseTree): unknown {
    const visitor = new GetByPathVisitor(data);
    parsedPath.accept(visitor);
    return visitor.visit(parsedPath);
}

export function getByPath(data: unknown, path: string): unknown {
    let parsedPath: ParseTree;
    try {
        parsedPath = parsePath(path);
    } catch (e) {
        /* istanbul ignore else */
        if (e instanceof ParseCancellationException) {
            return null;
        } else {
            throw e;
        }
    }

    return getByParsedPath(data, parsedPath);
}
