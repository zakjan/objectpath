package cz.zakjan.gget;
import cz.zakjan.gget.visitor.GetByPathVisitor;
import cz.zakjan.gget.parser.ObjectPathLexer;
import cz.zakjan.gget.parser.ObjectPathParser;
import org.antlr.v4.runtime.BailErrorStrategy;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.CharStreams;
import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.misc.ParseCancellationException;
import org.antlr.v4.runtime.tree.ParseTree;

public class GetByPath {
    public static ParseTree parsePath(String path) {
        // create lexer and parser
        CharStream charStream = CharStreams.fromString(path);
        ObjectPathLexer lexer = new ObjectPathLexer(charStream);
        CommonTokenStream tokenStream = new CommonTokenStream(lexer);
        ObjectPathParser parser = new ObjectPathParser(tokenStream);

        // don't attempt to recover from any parsing error
        parser.setErrorHandler(new BailErrorStrategy());

        // parse path into tree
        // throws ParseCancellationException in case of parsing error
        return parser.start();
    }

    public static Object getByParsedPath(Object data, ParseTree parsedPath) {
        GetByPathVisitor visitor = new GetByPathVisitor(data);
        parsedPath.accept(visitor);
        return visitor.visit(parsedPath);
    }

    public static Object getByPath(Object data, String path) {
        ParseTree parsedPath;
        try {
            parsedPath = parsePath(path);
        } catch (ParseCancellationException e) {
            return null;
        }

        return getByParsedPath(data, parsedPath);
    }
}
