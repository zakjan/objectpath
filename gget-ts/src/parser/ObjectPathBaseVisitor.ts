import { AbstractParseTreeVisitor } from "antlr4ts/tree";
import { ObjectPathVisitor } from "./ObjectPathVisitor";

export class ObjectPathBaseVisitor<Result> extends AbstractParseTreeVisitor<Result | undefined> implements ObjectPathVisitor<Result | undefined> {
    /// in Java, this is part of AbstractParseTreeVisitor
    protected defaultResult(): Result | undefined {
        return undefined;
    }

    // visit*(ctx) methods with default return visitChildren(ctx) are not necessary,
    // because ParserRuleContext subclasses defaults to it
}
