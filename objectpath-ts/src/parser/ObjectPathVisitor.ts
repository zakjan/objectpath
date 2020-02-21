// Generated from ../grammar/ObjectPath.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ParenthesesContext } from "./ObjectPathParser";
import { RootObjectContext } from "./ObjectPathParser";
import { CurrentObjectContext } from "./ObjectPathParser";
import { DotAccessContext } from "./ObjectPathParser";
import { BracketAccessContext } from "./ObjectPathParser";
import { ArrayFilterContext } from "./ObjectPathParser";
import { ArrayMapContext } from "./ObjectPathParser";
import { FunctionContext } from "./ObjectPathParser";
import { UnaryContext } from "./ObjectPathParser";
import { UnaryLogicalNotContext } from "./ObjectPathParser";
import { MultiplicativeContext } from "./ObjectPathParser";
import { AdditiveContext } from "./ObjectPathParser";
import { RelationalContext } from "./ObjectPathParser";
import { EqualityContext } from "./ObjectPathParser";
import { NullishCoalescingContext } from "./ObjectPathParser";
import { LogicalAndContext } from "./ObjectPathParser";
import { LogicalOrContext } from "./ObjectPathParser";
import { ConditionalContext } from "./ObjectPathParser";
import { StringContext } from "./ObjectPathParser";
import { NumberContext } from "./ObjectPathParser";
import { BooleanContext } from "./ObjectPathParser";
import { NullContext } from "./ObjectPathParser";
import { StartContext } from "./ObjectPathParser";
import { ExpressionContext } from "./ObjectPathParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ObjectPathParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ObjectPathVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `Parentheses`
	 * labeled alternative in `ObjectPathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParentheses?: (ctx: ParenthesesContext) => Result;

	/**
	 * Visit a parse tree produced by the `RootObject`
	 * labeled alternative in `ObjectPathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRootObject?: (ctx: RootObjectContext) => Result;

	/**
	 * Visit a parse tree produced by the `CurrentObject`
	 * labeled alternative in `ObjectPathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentObject?: (ctx: CurrentObjectContext) => Result;

	/**
	 * Visit a parse tree produced by the `DotAccess`
	 * labeled alternative in `ObjectPathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDotAccess?: (ctx: DotAccessContext) => Result;

	/**
	 * Visit a parse tree produced by the `BracketAccess`
	 * labeled alternative in `ObjectPathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBracketAccess?: (ctx: BracketAccessContext) => Result;

	/**
	 * Visit a parse tree produced by the `ArrayFilter`
	 * labeled alternative in `ObjectPathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayFilter?: (ctx: ArrayFilterContext) => Result;

	/**
	 * Visit a parse tree produced by the `ArrayMap`
	 * labeled alternative in `ObjectPathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayMap?: (ctx: ArrayMapContext) => Result;

	/**
	 * Visit a parse tree produced by the `Function`
	 * labeled alternative in `ObjectPathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction?: (ctx: FunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `Unary`
	 * labeled alternative in `ObjectPathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnary?: (ctx: UnaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `UnaryLogicalNot`
	 * labeled alternative in `ObjectPathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryLogicalNot?: (ctx: UnaryLogicalNotContext) => Result;

	/**
	 * Visit a parse tree produced by the `Multiplicative`
	 * labeled alternative in `ObjectPathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicative?: (ctx: MultiplicativeContext) => Result;

	/**
	 * Visit a parse tree produced by the `Additive`
	 * labeled alternative in `ObjectPathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditive?: (ctx: AdditiveContext) => Result;

	/**
	 * Visit a parse tree produced by the `Relational`
	 * labeled alternative in `ObjectPathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelational?: (ctx: RelationalContext) => Result;

	/**
	 * Visit a parse tree produced by the `Equality`
	 * labeled alternative in `ObjectPathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEquality?: (ctx: EqualityContext) => Result;

	/**
	 * Visit a parse tree produced by the `NullishCoalescing`
	 * labeled alternative in `ObjectPathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullishCoalescing?: (ctx: NullishCoalescingContext) => Result;

	/**
	 * Visit a parse tree produced by the `LogicalAnd`
	 * labeled alternative in `ObjectPathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalAnd?: (ctx: LogicalAndContext) => Result;

	/**
	 * Visit a parse tree produced by the `LogicalOr`
	 * labeled alternative in `ObjectPathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalOr?: (ctx: LogicalOrContext) => Result;

	/**
	 * Visit a parse tree produced by the `Conditional`
	 * labeled alternative in `ObjectPathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditional?: (ctx: ConditionalContext) => Result;

	/**
	 * Visit a parse tree produced by the `String`
	 * labeled alternative in `ObjectPathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by the `Number`
	 * labeled alternative in `ObjectPathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by the `Boolean`
	 * labeled alternative in `ObjectPathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolean?: (ctx: BooleanContext) => Result;

	/**
	 * Visit a parse tree produced by the `Null`
	 * labeled alternative in `ObjectPathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNull?: (ctx: NullContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectPathParser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart?: (ctx: StartContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectPathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
}

