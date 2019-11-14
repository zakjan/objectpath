package cz.zakjan.gget.visitor;
import cz.zakjan.gget.parser.ObjectPathBaseVisitor;
import cz.zakjan.gget.parser.ObjectPathParser;

import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;

public class GetByPathVisitor extends ObjectPathBaseVisitor<Object> {
    private Object data;

    public GetByPathVisitor(Object data) {
        super();
        this.data = data;
    }

    @Override
    public Object visitStart(ObjectPathParser.StartContext ctx) {
        if (ctx.expression() != null) {
            return this.evaluateExpression(this.data, ctx.expression());
        }
        return this.data;
    }

    private Object evaluateExpression(Object data, ObjectPathParser.ExpressionContext ctx) {
        if (ctx instanceof ObjectPathParser.ParenthesesContext) {
            return this.evaluateParentheses(data, (ObjectPathParser.ParenthesesContext)ctx);
        } else if (ctx instanceof ObjectPathParser.RootObjectContext) {
            return this.evaluateRootObject(data, (ObjectPathParser.RootObjectContext)ctx);
        } else if (ctx instanceof ObjectPathParser.CurrentObjectContext) {
            return this.evaluateCurrentObject(data, (ObjectPathParser.CurrentObjectContext)ctx);
        } else if (ctx instanceof ObjectPathParser.PropertyAccessContext) {
            return this.evaluatePropertyAccess(data, (ObjectPathParser.PropertyAccessContext)ctx);
        } else if (ctx instanceof ObjectPathParser.IndexAccessContext) {
            return this.evaluateIndexAccess(data, (ObjectPathParser.IndexAccessContext)ctx);
        } else if (ctx instanceof ObjectPathParser.ArrayFilterContext) {
            return this.evaluateArrayFilter(data, (ObjectPathParser.ArrayFilterContext)ctx);
        } else if (ctx instanceof ObjectPathParser.ArrayMapContext) {
            return this.evaluateArrayMap(data, (ObjectPathParser.ArrayMapContext)ctx);
        } else if (ctx instanceof ObjectPathParser.FunctionContext) {
            return this.evaluateFunction(data, (ObjectPathParser.FunctionContext)ctx);
        } else if (ctx instanceof ObjectPathParser.UnaryContext) {
            return this.evaluateUnary(data, (ObjectPathParser.UnaryContext)ctx);
        } else if (ctx instanceof ObjectPathParser.UnaryLogicalNotContext) {
            return this.evaluateUnaryLogicalNot(data, (ObjectPathParser.UnaryLogicalNotContext)ctx);
        } else if (ctx instanceof ObjectPathParser.MultiplicativeContext) {
            return this.evaluateMultiplicative(data, (ObjectPathParser.MultiplicativeContext)ctx);
        } else if (ctx instanceof ObjectPathParser.AdditiveContext) {
            return this.evaluateAdditive(data, (ObjectPathParser.AdditiveContext)ctx);
        } else if (ctx instanceof ObjectPathParser.RelationalContext) {
            return this.evaluateRelational(data, (ObjectPathParser.RelationalContext)ctx);
        } else if (ctx instanceof ObjectPathParser.EqualityContext) {
            return this.evaluateEquality(data, (ObjectPathParser.EqualityContext)ctx);
        } else if (ctx instanceof ObjectPathParser.LogicalAndContext) {
            return this.evaluateLogicalAnd(data, (ObjectPathParser.LogicalAndContext)ctx);
        } else if (ctx instanceof ObjectPathParser.LogicalOrContext) {
            return this.evaluateLogicalOr(data, (ObjectPathParser.LogicalOrContext)ctx);
        } else if (ctx instanceof ObjectPathParser.TernaryContext) {
            return this.evaluateTernary(data, (ObjectPathParser.TernaryContext)ctx);
        } else if (ctx instanceof ObjectPathParser.StringContext) {
            return this.evaluateString(data, (ObjectPathParser.StringContext)ctx);
        } else if (ctx instanceof ObjectPathParser.NumberContext) {
            return this.evaluateNumber(data, (ObjectPathParser.NumberContext)ctx);
        } else if (ctx instanceof ObjectPathParser.BooleanContext) {
            return this.evaluateBoolean(data, (ObjectPathParser.BooleanContext)ctx);
        } else if (ctx instanceof ObjectPathParser.NullContext) {
            return this.evaluateNull(data, (ObjectPathParser.NullContext)ctx);
        } else {
            throw new IllegalStateException();
        }
    }

    private Object evaluateParentheses(Object data, ObjectPathParser.ParenthesesContext ctx) {
        return this.evaluateExpression(data, ctx.expression());
    }

    private Object evaluateRootObject(Object data, ObjectPathParser.RootObjectContext ctx) {
        return this.data;
    }

    private Object evaluateCurrentObject(Object data, ObjectPathParser.CurrentObjectContext ctx) {
        return data;
    }

    private Object evaluatePropertyAccess(Object data, ObjectPathParser.PropertyAccessContext ctx) {
        Object value = ctx.expr1 != null ? this.evaluateExpression(data, ctx.expr1) : data;
        String property = ctx.IDENTIFIER().getText();

        if (value instanceof Map && ((Map<String, Object>)value).containsKey(property)) {
            return ((Map<String, Object>)value).get(property);
        }
        return null;
    }

    private Object evaluateIndexAccess(Object data, ObjectPathParser.IndexAccessContext ctx) {
        Object value = ctx.expr1 != null ? this.evaluateExpression(data, ctx.expr1) : data;
        Object index = this.evaluateExpression(data, ctx.expr2);

        if (value instanceof Map && index instanceof String && ((Map<String, Object>)value).containsKey(index)) {
            return ((Map<String, Object>)value).get(index);
        } else if (value instanceof List && index instanceof Integer) {
            Integer normalizedIndex = (Integer)index + ((Integer)index < 0 ? ((List<Object>)value).size() : 0);
            if (normalizedIndex >= 0 && normalizedIndex < ((List<Object>)value).size()) {
                return ((List<Object>)value).get(normalizedIndex);
            }
        }
        return null;
    }

    private Object evaluateArrayFilter(Object data, ObjectPathParser.ArrayFilterContext ctx) {
        Object value = ctx.expr1 != null ? this.evaluateExpression(data, ctx.expr1) : data;

        if (value instanceof List) {
            return ((List<Object>)value).stream().filter(item -> {
                return this.toBoolean(this.evaluateExpression(item, ctx.expr2));
            }).collect(Collectors.toList());
        }
        return null;
    }

    private Object evaluateArrayMap(Object data, ObjectPathParser.ArrayMapContext ctx) {
        Object value = ctx.expr1 != null ? this.evaluateExpression(data, ctx.expr1) : data;

        if (value instanceof List) {
            return ((List<Object>)value).stream().map(item -> {
                return this.evaluateExpression(item, ctx.expr2);
            }).collect(Collectors.toList());
        }
        return null;
    }

    private Object evaluateFunction(Object data, ObjectPathParser.FunctionContext ctx) {
        String identifier = ctx.IDENTIFIER().getText();
        List<Object> args = ctx.expression().stream().map(ctx2 -> {
            return this.evaluateExpression(data, ctx2);
        }).collect(Collectors.toList());

        return GetByPathVisitorFunctions.callFunction(identifier, args);
    }

    private Object evaluateUnary(Object data, ObjectPathParser.UnaryContext ctx) {
        Object value = this.evaluateExpression(data, ctx.expression());

        if (value instanceof Integer) {
            if (ctx.op.getText().equals("+")) {
                return +(Integer)value;
            } else if (ctx.op.getText().equals("-")) {
                return -(Integer)value;
            } else {
                throw new IllegalStateException();
            }
        }
        return null;
    }

    private Object evaluateUnaryLogicalNot(Object data, ObjectPathParser.UnaryLogicalNotContext ctx) {
        Object value = this.evaluateExpression(data, ctx.expression());

        return !this.toBoolean(value);
    }

    private Object evaluateMultiplicative(Object data, ObjectPathParser.MultiplicativeContext ctx) {
        Object left = this.evaluateExpression(data, ctx.expression().get(0));
        Object right = this.evaluateExpression(data, ctx.expression().get(1));

        if (left instanceof Integer && right instanceof Integer) {
            if (ctx.op.getText().equals("*")) {
                return (Integer)left * (Integer)right;
            } else if (ctx.op.getText().equals("/")) {
                if (!right.equals(0)) {
                    return (Integer)left / (Integer)right;
                } else {
                    return null;
                }
            } else {
                throw new IllegalStateException();
            }
        }
        return null;
    }

    private Object evaluateAdditive(Object data, ObjectPathParser.AdditiveContext ctx) {
        Object left = this.evaluateExpression(data, ctx.expression().get(0));
        Object right = this.evaluateExpression(data, ctx.expression().get(1));

        if (left instanceof String && right instanceof String) {
            if (ctx.op.getText().equals("+")) {
                return (String)left + (String)right;
            } else {
                throw new IllegalStateException();
            }
        } else if (left instanceof Integer && right instanceof Integer) {
            if (ctx.op.getText().equals("+")) {
                return (Integer)left + (Integer)right;
            } else if (ctx.op.getText().equals("-")) {
                return (Integer)left - (Integer)right;
            } else {
                throw new IllegalStateException();
            }
        }
        return null;
    }

    private Object evaluateRelational(Object data, ObjectPathParser.RelationalContext ctx) {
        Object left = this.evaluateExpression(data, ctx.expression().get(0));
        Object right = this.evaluateExpression(data, ctx.expression().get(1));

        if (left instanceof Integer && right instanceof Integer) {
            if (ctx.op.getText().equals("<")) {
                return (Integer)left < (Integer)right;
            } else if (ctx.op.getText().equals(">")) {
                return (Integer)left > (Integer)right;
            } else if (ctx.op.getText().equals("<=")) {
                return (Integer)left <= (Integer)right;
            } else if (ctx.op.getText().equals(">=")) {
                return (Integer)left >= (Integer)right;
            } else {
                throw new IllegalStateException();
            }
        }
        return null;
    }

    private Object evaluateEquality(Object data, ObjectPathParser.EqualityContext ctx) {
        Object left = this.evaluateExpression(data, ctx.expression().get(0));
        Object right = this.evaluateExpression(data, ctx.expression().get(1));

        if (ctx.op.getText().equals("==")) {
            return Objects.equals(left, right);
        } else if (ctx.op.getText().equals("!=")) {
            return !Objects.equals(left, right);
        } else {
            throw new IllegalStateException();
        }
    }

    private Object evaluateLogicalAnd(Object data, ObjectPathParser.LogicalAndContext ctx) {
        Object left = this.evaluateExpression(data, ctx.expression().get(0));
        Object right = this.evaluateExpression(data, ctx.expression().get(1));

        return this.toBoolean(left) == true ? right : left;
    }

    private Object evaluateLogicalOr(Object data, ObjectPathParser.LogicalOrContext ctx) {
        Object left = this.evaluateExpression(data, ctx.expression().get(0));
        Object right = this.evaluateExpression(data, ctx.expression().get(1));

        return this.toBoolean(left) == true ? left : right;
    }

    private Object evaluateTernary(Object data, ObjectPathParser.TernaryContext ctx) {
        Object condition = this.evaluateExpression(data, ctx.expression().get(0));
        Object pass = this.evaluateExpression(data, ctx.expression().get(1));
        Object fail = this.evaluateExpression(data, ctx.expression().get(2));

        return this.toBoolean(condition) == true ? pass : fail;
    }

    private Object evaluateString(Object data, ObjectPathParser.StringContext ctx) {
        return ctx.STRING().getText().substring(1, ctx.STRING().getText().length() - 1);
    }

    private Object evaluateNumber(Object data, ObjectPathParser.NumberContext ctx) {
        try {
            return Integer.parseInt(ctx.NUMBER().getText());
        } catch (NumberFormatException e) {
            return Long.parseLong(ctx.NUMBER().getText());
        }
    }

    private Object evaluateBoolean(Object data, ObjectPathParser.BooleanContext ctx) {
        return ctx.BOOLEAN().getText().equals("true");
    }

    private Object evaluateNull(Object data, ObjectPathParser.NullContext ctx) {
        return null;
    }

    private Boolean toBoolean(Object data) {
        return data instanceof Boolean ? (Boolean)data == true : data != null;
    }
}
