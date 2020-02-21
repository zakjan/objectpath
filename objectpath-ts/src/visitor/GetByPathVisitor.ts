import { ObjectPathBaseVisitor } from "../parser/ObjectPathBaseVisitor";
import * as ObjectPathParser from "../parser/ObjectPathParser";
import { GetByPathVisitorFunctions } from "./GetByPathVisitorFunctions";

export class GetByPathVisitor extends ObjectPathBaseVisitor<unknown> {
    constructor(private data: unknown) {
        super();
    }

    visitStart(ctx: ObjectPathParser.StartContext): unknown {
        const expression = ctx.expression();
        if (expression) {
            return this.evaluateExpression(this.data, expression);
        }
        return this.data;
    }

    private evaluateExpression(data: unknown, ctx: ObjectPathParser.ExpressionContext): unknown {
        if (ctx instanceof ObjectPathParser.ParenthesesContext) {
            return this.evaluateParentheses(data, ctx);
        } else if (ctx instanceof ObjectPathParser.RootObjectContext) {
            return this.evaluateRootObject(data, ctx);
        } else if (ctx instanceof ObjectPathParser.CurrentObjectContext) {
            return this.evaluateCurrentObject(data, ctx);
        } else if (ctx instanceof ObjectPathParser.DotAccessContext) {
            return this.evaluateDotAccess(data, ctx);
        } else if (ctx instanceof ObjectPathParser.BracketAccessContext) {
            return this.evaluateBracketAccess(data, ctx);
        } else if (ctx instanceof ObjectPathParser.ArrayFilterContext) {
            return this.evaluateArrayFilter(data, ctx);
        } else if (ctx instanceof ObjectPathParser.ArrayMapContext) {
            return this.evaluateArrayMap(data, ctx);
        } else if (ctx instanceof ObjectPathParser.FunctionContext) {
            return this.evaluateFunction(data, ctx);
        } else if (ctx instanceof ObjectPathParser.UnaryContext) {
            return this.evaluateUnary(data, ctx);
        } else if (ctx instanceof ObjectPathParser.UnaryLogicalNotContext) {
            return this.evaluateUnaryLogicalNot(data, ctx);
        } else if (ctx instanceof ObjectPathParser.MultiplicativeContext) {
            return this.evaluateMultiplicative(data, ctx);
        } else if (ctx instanceof ObjectPathParser.AdditiveContext) {
            return this.evaluateAdditive(data, ctx);
        } else if (ctx instanceof ObjectPathParser.RelationalContext) {
            return this.evaluateRelational(data, ctx);
        } else if (ctx instanceof ObjectPathParser.EqualityContext) {
            return this.evaluateEquality(data, ctx);
        } else if (ctx instanceof ObjectPathParser.NullishCoalescingContext) {
            return this.evaluateNullishCoalescing(data, ctx);
        } else if (ctx instanceof ObjectPathParser.LogicalAndContext) {
            return this.evaluateLogicalAnd(data, ctx);
        } else if (ctx instanceof ObjectPathParser.LogicalOrContext) {
            return this.evaluateLogicalOr(data, ctx);
        } else if (ctx instanceof ObjectPathParser.ConditionalContext) {
            return this.evaluateConditional(data, ctx);
        } else if (ctx instanceof ObjectPathParser.StringContext) {
            return this.evaluateString(data, ctx);
        } else if (ctx instanceof ObjectPathParser.NumberContext) {
            return this.evaluateNumber(data, ctx);
        } else if (ctx instanceof ObjectPathParser.BooleanContext) {
            return this.evaluateBoolean(data, ctx);
        } else if (ctx instanceof ObjectPathParser.NullContext) {
            return this.evaluateNull(data, ctx);
        } else {
            /* istanbul ignore next */
            throw new Error("Illegal state");
        }
    }

    private evaluateParentheses(data: unknown, ctx: ObjectPathParser.ParenthesesContext): unknown {
        return this.evaluateExpression(data, ctx.expression());
    }

    private evaluateRootObject(_data: unknown, _ctx: ObjectPathParser.RootObjectContext): unknown {
        return this.data;
    }

    private evaluateCurrentObject(data: unknown, _ctx: ObjectPathParser.CurrentObjectContext): unknown {
        return data;
    }

    private evaluateDotAccess(data: unknown, ctx: ObjectPathParser.DotAccessContext): unknown {
        const value = ctx._expr1 ? this.evaluateExpression(data, ctx._expr1) : data;
        const property = ctx.IDENTIFIER().text;

        if (this.isObject(value) && value.hasOwnProperty(property)) {
            return value[property];
        }
        return null;
    }

    private evaluateBracketAccess(data: unknown, ctx: ObjectPathParser.BracketAccessContext): unknown {
        const value = ctx._expr1 ? this.evaluateExpression(data, ctx._expr1) : data;
        const index = this.evaluateExpression(data, ctx._expr2);

        if (this.isObject(value) && typeof index === "string" && value.hasOwnProperty(index)) {
            return value[index];
        } else if (Array.isArray(value) && typeof index === "number") {
            const normalizedIndex = index + (index < 0 ? value.length : 0);
            if (normalizedIndex >= 0 && normalizedIndex < value.length) {
                return value[normalizedIndex];
            }
        }
        return null;
    }

    private evaluateArrayFilter(data: unknown, ctx: ObjectPathParser.ArrayFilterContext): unknown {
        const value = ctx._expr1 ? this.evaluateExpression(data, ctx._expr1) : data;

        if (Array.isArray(value)) {
            return value.filter(item => {
                return this.toBoolean(this.evaluateExpression(item, ctx._expr2));
            });
        }
        return null;
    }

    private evaluateArrayMap(data: unknown, ctx: ObjectPathParser.ArrayMapContext): unknown {
        const value = ctx._expr1 ? this.evaluateExpression(data, ctx._expr1) : data;

        if (Array.isArray(value)) {
            return value.map(item => {
                return this.evaluateExpression(item, ctx._expr2);
            });
        }
        return null;
    }

    private evaluateUnary(data: unknown, ctx: ObjectPathParser.UnaryContext): unknown {
        const value = this.evaluateExpression(data, ctx.expression());

        if (typeof value === "number") {
            if (ctx._op.text === "+") {
                return +value;
            } else if (ctx._op.text === "-") {
                return -value;
            } else {
                /* istanbul ignore next */
                throw new Error("Illegal state");
            }
        }
        return null;
    }

    private evaluateUnaryLogicalNot(data: unknown, ctx: ObjectPathParser.UnaryLogicalNotContext): unknown {
        const value = this.evaluateExpression(data, ctx.expression());

        return !this.toBoolean(value);
    }

    private evaluateMultiplicative(data: unknown, ctx: ObjectPathParser.MultiplicativeContext): unknown {
        const left = this.evaluateExpression(data, ctx.expression()[0]);
        const right = this.evaluateExpression(data, ctx.expression()[1]);

        if (typeof left === "number" && typeof right === "number") {
            if (ctx._op.text === "*") {
                return left * right;
            } else if (ctx._op.text === "/") {
                if (right !== 0) {
                    return Math.trunc(left / right);
                } else {
                    return null;
                }
            } else {
                /* istanbul ignore next */
                throw new Error("Illegal state");
            }
        }
        return null;
    }

    private evaluateAdditive(data: unknown, ctx: ObjectPathParser.AdditiveContext): unknown {
        const left = this.evaluateExpression(data, ctx.expression()[0]);
        const right = this.evaluateExpression(data, ctx.expression()[1]);

        if (typeof left === "string" && typeof right === "string") {
            if (ctx._op.text === "+") {
                return left + right;
            } else {
                /* istanbul ignore next */
                throw new Error("Illegal state");
            }
        } else if (typeof left === "number" && typeof right === "number") {
            if (ctx._op.text === "+") {
                return left + right;
            } else if (ctx._op.text === "-") {
                return left - right;
            } else {
                /* istanbul ignore next */
                throw new Error("Illegal state");
            }
        }
        return null;
    }

    private evaluateRelational(data: unknown, ctx: ObjectPathParser.RelationalContext): unknown {
        const left = this.evaluateExpression(data, ctx.expression()[0]);
        const right = this.evaluateExpression(data, ctx.expression()[1]);

        if (typeof left === "number" && typeof right === "number") {
            if (ctx._op.text === "<") {
                return left < right;
            } else if (ctx._op.text === ">") {
                return left > right;
            } else if (ctx._op.text === "<=") {
                return left <= right;
            } else if (ctx._op.text === ">=") {
                return left >= right;
            } else {
                /* istanbul ignore next */
                throw new Error("Illegal state");
            }
        }
        return null;
    }

    private evaluateEquality(data: unknown, ctx: ObjectPathParser.EqualityContext): unknown {
        const left = this.evaluateExpression(data, ctx.expression()[0]);
        const right = this.evaluateExpression(data, ctx.expression()[1]);

        if (ctx._op.text === "==") {
            return left === right;
        } else if (ctx._op.text === "!=") {
            return left !== right;
        } else {
            /* istanbul ignore next */
            throw new Error("Illegal state");
        }
    }

    private evaluateNullishCoalescing(data: unknown, ctx: ObjectPathParser.NullishCoalescingContext): unknown {
        const left = this.evaluateExpression(data, ctx.expression()[0]);
        const right = this.evaluateExpression(data, ctx.expression()[1]);

        return left === null ? right : left;
    }

    private evaluateLogicalAnd(data: unknown, ctx: ObjectPathParser.LogicalAndContext): unknown {
        const left = this.evaluateExpression(data, ctx.expression()[0]);
        const right = this.evaluateExpression(data, ctx.expression()[1]);

        return this.toBoolean(left) === true ? right : left;
    }

    private evaluateLogicalOr(data: unknown, ctx: ObjectPathParser.LogicalOrContext): unknown {
        const left = this.evaluateExpression(data, ctx.expression()[0]);
        const right = this.evaluateExpression(data, ctx.expression()[1]);

        return this.toBoolean(left) === true ? left : right;
    }

    private evaluateConditional(data: unknown, ctx: ObjectPathParser.ConditionalContext): unknown {
        const condition = this.evaluateExpression(data, ctx.expression()[0]);
        const pass = this.evaluateExpression(data, ctx.expression()[1]);
        const fail = this.evaluateExpression(data, ctx.expression()[2]);

        return this.toBoolean(condition) === true ? pass : fail;
    }

    private evaluateFunction(data: unknown, ctx: ObjectPathParser.FunctionContext): unknown {
        const identifier = ctx.IDENTIFIER().text;
        const args = ctx.expression().map(ctx2 => {
            return this.evaluateExpression(data, ctx2);
        });

        return GetByPathVisitorFunctions.callFunction(identifier, args);
    }

    private evaluateString(_data: unknown, ctx: ObjectPathParser.StringContext): unknown {
        return ctx.STRING().text.substring(1, ctx.STRING().text.length - 1);
    }

    private evaluateNumber(_data: unknown, ctx: ObjectPathParser.NumberContext): unknown {
        return parseInt(ctx.NUMBER().text, 10);
    }

    private evaluateBoolean(_data: unknown, ctx: ObjectPathParser.BooleanContext): unknown {
        return ctx.BOOLEAN().text === "true";
    }

    private evaluateNull(_data: unknown, _ctx: ObjectPathParser.NullContext): unknown {
        return null;
    }

    private toBoolean(data: unknown): boolean {
        return typeof data === "boolean" ? data === true : data != null;
    }

    private isObject(data: unknown): data is { [key: string]: unknown } {
        return data && typeof data === 'object';
    }
}
