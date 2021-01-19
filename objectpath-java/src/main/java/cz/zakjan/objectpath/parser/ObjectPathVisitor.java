// Generated from ObjectPath.g4 by ANTLR 4.7.2
package cz.zakjan.objectpath.parser;
import org.antlr.v4.runtime.tree.ParseTreeVisitor;

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by {@link ObjectPathParser}.
 *
 * @param <T> The return type of the visit operation. Use {@link Void} for
 * operations with no return type.
 */
public interface ObjectPathVisitor<T> extends ParseTreeVisitor<T> {
	/**
	 * Visit a parse tree produced by {@link ObjectPathParser#start}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStart(ObjectPathParser.StartContext ctx);
	/**
	 * Visit a parse tree produced by the {@code ArrayFilter}
	 * labeled alternative in {@link ObjectPathParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitArrayFilter(ObjectPathParser.ArrayFilterContext ctx);
	/**
	 * Visit a parse tree produced by the {@code DotAccess}
	 * labeled alternative in {@link ObjectPathParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDotAccess(ObjectPathParser.DotAccessContext ctx);
	/**
	 * Visit a parse tree produced by the {@code Null}
	 * labeled alternative in {@link ObjectPathParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNull(ObjectPathParser.NullContext ctx);
	/**
	 * Visit a parse tree produced by the {@code UnaryLogicalNot}
	 * labeled alternative in {@link ObjectPathParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUnaryLogicalNot(ObjectPathParser.UnaryLogicalNotContext ctx);
	/**
	 * Visit a parse tree produced by the {@code Relational}
	 * labeled alternative in {@link ObjectPathParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRelational(ObjectPathParser.RelationalContext ctx);
	/**
	 * Visit a parse tree produced by the {@code ArrayMap}
	 * labeled alternative in {@link ObjectPathParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitArrayMap(ObjectPathParser.ArrayMapContext ctx);
	/**
	 * Visit a parse tree produced by the {@code Conditional}
	 * labeled alternative in {@link ObjectPathParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitConditional(ObjectPathParser.ConditionalContext ctx);
	/**
	 * Visit a parse tree produced by the {@code String}
	 * labeled alternative in {@link ObjectPathParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitString(ObjectPathParser.StringContext ctx);
	/**
	 * Visit a parse tree produced by the {@code RootObject}
	 * labeled alternative in {@link ObjectPathParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRootObject(ObjectPathParser.RootObjectContext ctx);
	/**
	 * Visit a parse tree produced by the {@code BracketAccess}
	 * labeled alternative in {@link ObjectPathParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBracketAccess(ObjectPathParser.BracketAccessContext ctx);
	/**
	 * Visit a parse tree produced by the {@code Unary}
	 * labeled alternative in {@link ObjectPathParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUnary(ObjectPathParser.UnaryContext ctx);
	/**
	 * Visit a parse tree produced by the {@code NullishCoalescing}
	 * labeled alternative in {@link ObjectPathParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNullishCoalescing(ObjectPathParser.NullishCoalescingContext ctx);
	/**
	 * Visit a parse tree produced by the {@code LogicalOr}
	 * labeled alternative in {@link ObjectPathParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLogicalOr(ObjectPathParser.LogicalOrContext ctx);
	/**
	 * Visit a parse tree produced by the {@code ArrayFind}
	 * labeled alternative in {@link ObjectPathParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitArrayFind(ObjectPathParser.ArrayFindContext ctx);
	/**
	 * Visit a parse tree produced by the {@code Function}
	 * labeled alternative in {@link ObjectPathParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFunction(ObjectPathParser.FunctionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code Multiplicative}
	 * labeled alternative in {@link ObjectPathParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMultiplicative(ObjectPathParser.MultiplicativeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code Additive}
	 * labeled alternative in {@link ObjectPathParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAdditive(ObjectPathParser.AdditiveContext ctx);
	/**
	 * Visit a parse tree produced by the {@code Number}
	 * labeled alternative in {@link ObjectPathParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNumber(ObjectPathParser.NumberContext ctx);
	/**
	 * Visit a parse tree produced by the {@code LogicalAnd}
	 * labeled alternative in {@link ObjectPathParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLogicalAnd(ObjectPathParser.LogicalAndContext ctx);
	/**
	 * Visit a parse tree produced by the {@code CurrentObject}
	 * labeled alternative in {@link ObjectPathParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCurrentObject(ObjectPathParser.CurrentObjectContext ctx);
	/**
	 * Visit a parse tree produced by the {@code Equality}
	 * labeled alternative in {@link ObjectPathParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitEquality(ObjectPathParser.EqualityContext ctx);
	/**
	 * Visit a parse tree produced by the {@code Boolean}
	 * labeled alternative in {@link ObjectPathParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBoolean(ObjectPathParser.BooleanContext ctx);
	/**
	 * Visit a parse tree produced by the {@code Parentheses}
	 * labeled alternative in {@link ObjectPathParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitParentheses(ObjectPathParser.ParenthesesContext ctx);
}