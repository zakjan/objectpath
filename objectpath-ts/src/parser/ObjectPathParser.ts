// Generated from grammar/ObjectPath.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ObjectPathVisitor } from "./ObjectPathVisitor";


export class ObjectPathParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly STRING = 28;
	public static readonly NUMBER = 29;
	public static readonly BOOLEAN = 30;
	public static readonly NULL = 31;
	public static readonly IDENTIFIER = 32;
	public static readonly WHITESPACE = 33;
	public static readonly RULE_start = 0;
	public static readonly RULE_expression = 1;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "expression",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'$'", "'@'", "'.'", "'['", "']'", "'find('", 
		"'filter('", "'map('", "','", "'+'", "'-'", "'!'", "'*'", "'/'", "'<'", 
		"'>'", "'<='", "'>='", "'=='", "'!='", "'??'", "'&&'", "'||'", "'?'", 
		"':'", undefined, undefined, undefined, "'null'", undefined, "' '",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"STRING", "NUMBER", "BOOLEAN", "NULL", "IDENTIFIER", "WHITESPACE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ObjectPathParser._LITERAL_NAMES, ObjectPathParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ObjectPathParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ObjectPath.g4"; }

	// @Override
	public get ruleNames(): string[] { return ObjectPathParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ObjectPathParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ObjectPathParser._ATN, this);
	}
	// @RuleVersion(0)
	public start(): StartContext {
		let _localctx: StartContext = new StartContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ObjectPathParser.RULE_start);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 5;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & ((1 << (ObjectPathParser.T__0 - 1)) | (1 << (ObjectPathParser.T__2 - 1)) | (1 << (ObjectPathParser.T__3 - 1)) | (1 << (ObjectPathParser.T__5 - 1)) | (1 << (ObjectPathParser.T__7 - 1)) | (1 << (ObjectPathParser.T__8 - 1)) | (1 << (ObjectPathParser.T__9 - 1)) | (1 << (ObjectPathParser.T__11 - 1)) | (1 << (ObjectPathParser.T__12 - 1)) | (1 << (ObjectPathParser.T__13 - 1)) | (1 << (ObjectPathParser.STRING - 1)) | (1 << (ObjectPathParser.NUMBER - 1)) | (1 << (ObjectPathParser.BOOLEAN - 1)) | (1 << (ObjectPathParser.NULL - 1)) | (1 << (ObjectPathParser.IDENTIFIER - 1)))) !== 0)) {
				{
				this.state = 4;
				this.expression(0);
				}
			}

			this.state = 7;
			this.match(ObjectPathParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 2;
		this.enterRecursionRule(_localctx, 2, ObjectPathParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 55;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				_localctx = new ParenthesesContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 10;
				this.match(ObjectPathParser.T__0);
				this.state = 11;
				this.expression(0);
				this.state = 12;
				this.match(ObjectPathParser.T__1);
				}
				break;

			case 2:
				{
				_localctx = new RootObjectContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 14;
				this.match(ObjectPathParser.T__2);
				}
				break;

			case 3:
				{
				_localctx = new CurrentObjectContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 15;
				this.match(ObjectPathParser.T__3);
				}
				break;

			case 4:
				{
				_localctx = new DotAccessContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 16;
				this.match(ObjectPathParser.IDENTIFIER);
				}
				break;

			case 5:
				{
				_localctx = new BracketAccessContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 17;
				this.match(ObjectPathParser.T__5);
				this.state = 18;
				(_localctx as BracketAccessContext)._expr2 = this.expression(0);
				this.state = 19;
				this.match(ObjectPathParser.T__6);
				}
				break;

			case 6:
				{
				_localctx = new ArrayFilterContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 21;
				this.match(ObjectPathParser.T__7);
				this.state = 22;
				(_localctx as ArrayFilterContext)._expr2 = this.expression(0);
				this.state = 23;
				this.match(ObjectPathParser.T__1);
				}
				break;

			case 7:
				{
				_localctx = new ArrayFilterContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 25;
				this.match(ObjectPathParser.T__8);
				this.state = 26;
				(_localctx as ArrayFilterContext)._expr2 = this.expression(0);
				this.state = 27;
				this.match(ObjectPathParser.T__1);
				}
				break;

			case 8:
				{
				_localctx = new ArrayMapContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 29;
				this.match(ObjectPathParser.T__9);
				this.state = 30;
				(_localctx as ArrayMapContext)._expr2 = this.expression(0);
				this.state = 31;
				this.match(ObjectPathParser.T__1);
				}
				break;

			case 9:
				{
				_localctx = new FunctionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 33;
				this.match(ObjectPathParser.IDENTIFIER);
				this.state = 34;
				this.match(ObjectPathParser.T__0);
				this.state = 44;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & ((1 << (ObjectPathParser.T__0 - 1)) | (1 << (ObjectPathParser.T__2 - 1)) | (1 << (ObjectPathParser.T__3 - 1)) | (1 << (ObjectPathParser.T__5 - 1)) | (1 << (ObjectPathParser.T__7 - 1)) | (1 << (ObjectPathParser.T__8 - 1)) | (1 << (ObjectPathParser.T__9 - 1)) | (1 << (ObjectPathParser.T__11 - 1)) | (1 << (ObjectPathParser.T__12 - 1)) | (1 << (ObjectPathParser.T__13 - 1)) | (1 << (ObjectPathParser.STRING - 1)) | (1 << (ObjectPathParser.NUMBER - 1)) | (1 << (ObjectPathParser.BOOLEAN - 1)) | (1 << (ObjectPathParser.NULL - 1)) | (1 << (ObjectPathParser.IDENTIFIER - 1)))) !== 0)) {
					{
					this.state = 40;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 35;
							this.expression(0);
							this.state = 36;
							this.match(ObjectPathParser.T__10);
							}
							}
						}
						this.state = 42;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
					}
					this.state = 43;
					this.expression(0);
					}
				}

				this.state = 46;
				this.match(ObjectPathParser.T__1);
				}
				break;

			case 10:
				{
				_localctx = new UnaryContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 47;
				(_localctx as UnaryContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === ObjectPathParser.T__11 || _la === ObjectPathParser.T__12)) {
					(_localctx as UnaryContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 48;
				this.expression(14);
				}
				break;

			case 11:
				{
				_localctx = new UnaryLogicalNotContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 49;
				this.match(ObjectPathParser.T__13);
				this.state = 50;
				this.expression(13);
				}
				break;

			case 12:
				{
				_localctx = new StringContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 51;
				this.match(ObjectPathParser.STRING);
				}
				break;

			case 13:
				{
				_localctx = new NumberContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 52;
				this.match(ObjectPathParser.NUMBER);
				}
				break;

			case 14:
				{
				_localctx = new BooleanContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 53;
				this.match(ObjectPathParser.BOOLEAN);
				}
				break;

			case 15:
				{
				_localctx = new NullContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 54;
				this.match(ObjectPathParser.NULL);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 112;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 110;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
					case 1:
						{
						_localctx = new MultiplicativeContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ObjectPathParser.RULE_expression);
						this.state = 57;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 58;
						(_localctx as MultiplicativeContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === ObjectPathParser.T__14 || _la === ObjectPathParser.T__15)) {
							(_localctx as MultiplicativeContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 59;
						this.expression(13);
						}
						break;

					case 2:
						{
						_localctx = new AdditiveContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ObjectPathParser.RULE_expression);
						this.state = 60;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 61;
						(_localctx as AdditiveContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === ObjectPathParser.T__11 || _la === ObjectPathParser.T__12)) {
							(_localctx as AdditiveContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 62;
						this.expression(12);
						}
						break;

					case 3:
						{
						_localctx = new RelationalContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ObjectPathParser.RULE_expression);
						this.state = 63;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 64;
						(_localctx as RelationalContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ObjectPathParser.T__16) | (1 << ObjectPathParser.T__17) | (1 << ObjectPathParser.T__18) | (1 << ObjectPathParser.T__19))) !== 0))) {
							(_localctx as RelationalContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 65;
						this.expression(11);
						}
						break;

					case 4:
						{
						_localctx = new EqualityContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ObjectPathParser.RULE_expression);
						this.state = 66;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 67;
						(_localctx as EqualityContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === ObjectPathParser.T__20 || _la === ObjectPathParser.T__21)) {
							(_localctx as EqualityContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 68;
						this.expression(10);
						}
						break;

					case 5:
						{
						_localctx = new NullishCoalescingContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ObjectPathParser.RULE_expression);
						this.state = 69;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 70;
						this.match(ObjectPathParser.T__22);
						this.state = 71;
						this.expression(9);
						}
						break;

					case 6:
						{
						_localctx = new LogicalAndContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ObjectPathParser.RULE_expression);
						this.state = 72;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 73;
						this.match(ObjectPathParser.T__23);
						this.state = 74;
						this.expression(8);
						}
						break;

					case 7:
						{
						_localctx = new LogicalOrContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ObjectPathParser.RULE_expression);
						this.state = 75;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 76;
						this.match(ObjectPathParser.T__24);
						this.state = 77;
						this.expression(7);
						}
						break;

					case 8:
						{
						_localctx = new ConditionalContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ObjectPathParser.RULE_expression);
						this.state = 78;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 79;
						this.match(ObjectPathParser.T__25);
						this.state = 80;
						this.expression(0);
						this.state = 81;
						this.match(ObjectPathParser.T__26);
						this.state = 82;
						this.expression(5);
						}
						break;

					case 9:
						{
						_localctx = new DotAccessContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as DotAccessContext)._expr1 = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ObjectPathParser.RULE_expression);
						this.state = 84;
						if (!(this.precpred(this._ctx, 24))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 24)");
						}
						this.state = 85;
						this.match(ObjectPathParser.T__4);
						this.state = 86;
						this.match(ObjectPathParser.IDENTIFIER);
						}
						break;

					case 10:
						{
						_localctx = new BracketAccessContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BracketAccessContext)._expr1 = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ObjectPathParser.RULE_expression);
						this.state = 87;
						if (!(this.precpred(this._ctx, 22))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 22)");
						}
						this.state = 88;
						this.match(ObjectPathParser.T__5);
						this.state = 89;
						(_localctx as BracketAccessContext)._expr2 = this.expression(0);
						this.state = 90;
						this.match(ObjectPathParser.T__6);
						}
						break;

					case 11:
						{
						_localctx = new ArrayFindContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ArrayFindContext)._expr1 = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ObjectPathParser.RULE_expression);
						this.state = 92;
						if (!(this.precpred(this._ctx, 20))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 20)");
						}
						this.state = 93;
						this.match(ObjectPathParser.T__4);
						this.state = 94;
						this.match(ObjectPathParser.T__7);
						this.state = 95;
						(_localctx as ArrayFindContext)._expr2 = this.expression(0);
						this.state = 96;
						this.match(ObjectPathParser.T__1);
						}
						break;

					case 12:
						{
						_localctx = new ArrayFilterContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ArrayFilterContext)._expr1 = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ObjectPathParser.RULE_expression);
						this.state = 98;
						if (!(this.precpred(this._ctx, 18))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 18)");
						}
						this.state = 99;
						this.match(ObjectPathParser.T__4);
						this.state = 100;
						this.match(ObjectPathParser.T__8);
						this.state = 101;
						(_localctx as ArrayFilterContext)._expr2 = this.expression(0);
						this.state = 102;
						this.match(ObjectPathParser.T__1);
						}
						break;

					case 13:
						{
						_localctx = new ArrayMapContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ArrayMapContext)._expr1 = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ObjectPathParser.RULE_expression);
						this.state = 104;
						if (!(this.precpred(this._ctx, 16))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 16)");
						}
						this.state = 105;
						this.match(ObjectPathParser.T__4);
						this.state = 106;
						this.match(ObjectPathParser.T__9);
						this.state = 107;
						(_localctx as ArrayMapContext)._expr2 = this.expression(0);
						this.state = 108;
						this.match(ObjectPathParser.T__1);
						}
						break;
					}
					}
				}
				this.state = 114;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 1:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 12);

		case 1:
			return this.precpred(this._ctx, 11);

		case 2:
			return this.precpred(this._ctx, 10);

		case 3:
			return this.precpred(this._ctx, 9);

		case 4:
			return this.precpred(this._ctx, 8);

		case 5:
			return this.precpred(this._ctx, 7);

		case 6:
			return this.precpred(this._ctx, 6);

		case 7:
			return this.precpred(this._ctx, 5);

		case 8:
			return this.precpred(this._ctx, 24);

		case 9:
			return this.precpred(this._ctx, 22);

		case 10:
			return this.precpred(this._ctx, 20);

		case 11:
			return this.precpred(this._ctx, 18);

		case 12:
			return this.precpred(this._ctx, 16);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03#v\x04\x02\t\x02" +
		"\x04\x03\t\x03\x03\x02\x05\x02\b\n\x02\x03\x02\x03\x02\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x07\x03)\n\x03\f\x03\x0E\x03,\v\x03\x03\x03\x05\x03/\n\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03:" +
		"\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x07\x03q\n\x03\f\x03\x0E\x03t\v\x03\x03\x03\x02\x02\x03\x04\x04\x02\x02" +
		"\x04\x02\x02\x06\x03\x02\x0E\x0F\x03\x02\x11\x12\x03\x02\x13\x16\x03\x02" +
		"\x17\x18\x02\x91\x02\x07\x03\x02\x02\x02\x049\x03\x02\x02\x02\x06\b\x05" +
		"\x04\x03\x02\x07\x06\x03\x02\x02\x02\x07\b\x03\x02\x02\x02\b\t\x03\x02" +
		"\x02\x02\t\n\x07\x02\x02\x03\n\x03\x03\x02\x02\x02\v\f\b\x03\x01\x02\f" +
		"\r\x07\x03\x02\x02\r\x0E\x05\x04\x03\x02\x0E\x0F\x07\x04\x02\x02\x0F:" +
		"\x03\x02\x02\x02\x10:\x07\x05\x02\x02\x11:\x07\x06\x02\x02\x12:\x07\"" +
		"\x02\x02\x13\x14\x07\b\x02\x02\x14\x15\x05\x04\x03\x02\x15\x16\x07\t\x02" +
		"\x02\x16:\x03\x02\x02\x02\x17\x18\x07\n\x02\x02\x18\x19\x05\x04\x03\x02" +
		"\x19\x1A\x07\x04\x02\x02\x1A:\x03\x02\x02\x02\x1B\x1C\x07\v\x02\x02\x1C" +
		"\x1D\x05\x04\x03\x02\x1D\x1E\x07\x04\x02\x02\x1E:\x03\x02\x02\x02\x1F" +
		" \x07\f\x02\x02 !\x05\x04\x03\x02!\"\x07\x04\x02\x02\":\x03\x02\x02\x02" +
		"#$\x07\"\x02\x02$.\x07\x03\x02\x02%&\x05\x04\x03\x02&\'\x07\r\x02\x02" +
		"\')\x03\x02\x02\x02(%\x03\x02\x02\x02),\x03\x02\x02\x02*(\x03\x02\x02" +
		"\x02*+\x03\x02\x02\x02+-\x03\x02\x02\x02,*\x03\x02\x02\x02-/\x05\x04\x03" +
		"\x02.*\x03\x02\x02\x02./\x03\x02\x02\x02/0\x03\x02\x02\x020:\x07\x04\x02" +
		"\x0212\t\x02\x02\x022:\x05\x04\x03\x1034\x07\x10\x02\x024:\x05\x04\x03" +
		"\x0F5:\x07\x1E\x02\x026:\x07\x1F\x02\x027:\x07 \x02\x028:\x07!\x02\x02" +
		"9\v\x03\x02\x02\x029\x10\x03\x02\x02\x029\x11\x03\x02\x02\x029\x12\x03" +
		"\x02\x02\x029\x13\x03\x02\x02\x029\x17\x03\x02\x02\x029\x1B\x03\x02\x02" +
		"\x029\x1F\x03\x02\x02\x029#\x03\x02\x02\x0291\x03\x02\x02\x0293\x03\x02" +
		"\x02\x0295\x03\x02\x02\x0296\x03\x02\x02\x0297\x03\x02\x02\x0298\x03\x02" +
		"\x02\x02:r\x03\x02\x02\x02;<\f\x0E\x02\x02<=\t\x03\x02\x02=q\x05\x04\x03" +
		"\x0F>?\f\r\x02\x02?@\t\x02\x02\x02@q\x05\x04\x03\x0EAB\f\f\x02\x02BC\t" +
		"\x04\x02\x02Cq\x05\x04\x03\rDE\f\v\x02\x02EF\t\x05\x02\x02Fq\x05\x04\x03" +
		"\fGH\f\n\x02\x02HI\x07\x19\x02\x02Iq\x05\x04\x03\vJK\f\t\x02\x02KL\x07" +
		"\x1A\x02\x02Lq\x05\x04\x03\nMN\f\b\x02\x02NO\x07\x1B\x02\x02Oq\x05\x04" +
		"\x03\tPQ\f\x07\x02\x02QR\x07\x1C\x02\x02RS\x05\x04\x03\x02ST\x07\x1D\x02" +
		"\x02TU\x05\x04\x03\x07Uq\x03\x02\x02\x02VW\f\x1A\x02\x02WX\x07\x07\x02" +
		"\x02Xq\x07\"\x02\x02YZ\f\x18\x02\x02Z[\x07\b\x02\x02[\\\x05\x04\x03\x02" +
		"\\]\x07\t\x02\x02]q\x03\x02\x02\x02^_\f\x16\x02\x02_`\x07\x07\x02\x02" +
		"`a\x07\n\x02\x02ab\x05\x04\x03\x02bc\x07\x04\x02\x02cq\x03\x02\x02\x02" +
		"de\f\x14\x02\x02ef\x07\x07\x02\x02fg\x07\v\x02\x02gh\x05\x04\x03\x02h" +
		"i\x07\x04\x02\x02iq\x03\x02\x02\x02jk\f\x12\x02\x02kl\x07\x07\x02\x02" +
		"lm\x07\f\x02\x02mn\x05\x04\x03\x02no\x07\x04\x02\x02oq\x03\x02\x02\x02" +
		"p;\x03\x02\x02\x02p>\x03\x02\x02\x02pA\x03\x02\x02\x02pD\x03\x02\x02\x02" +
		"pG\x03\x02\x02\x02pJ\x03\x02\x02\x02pM\x03\x02\x02\x02pP\x03\x02\x02\x02" +
		"pV\x03\x02\x02\x02pY\x03\x02\x02\x02p^\x03\x02\x02\x02pd\x03\x02\x02\x02" +
		"pj\x03\x02\x02\x02qt\x03\x02\x02\x02rp\x03\x02\x02\x02rs\x03\x02\x02\x02" +
		"s\x05\x03\x02\x02\x02tr\x03\x02\x02\x02\b\x07*.9pr";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ObjectPathParser.__ATN) {
			ObjectPathParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ObjectPathParser._serializedATN));
		}

		return ObjectPathParser.__ATN;
	}

}

export class StartContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(ObjectPathParser.EOF, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ObjectPathParser.RULE_start; }
	// @Override
	public accept<Result>(visitor: ObjectPathVisitor<Result>): Result {
		if (visitor.visitStart) {
			return visitor.visitStart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ObjectPathParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ParenthesesContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ObjectPathVisitor<Result>): Result {
		if (visitor.visitParentheses) {
			return visitor.visitParentheses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RootObjectContext extends ExpressionContext {
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ObjectPathVisitor<Result>): Result {
		if (visitor.visitRootObject) {
			return visitor.visitRootObject(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CurrentObjectContext extends ExpressionContext {
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ObjectPathVisitor<Result>): Result {
		if (visitor.visitCurrentObject) {
			return visitor.visitCurrentObject(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DotAccessContext extends ExpressionContext {
	public _expr1: ExpressionContext;
	public IDENTIFIER(): TerminalNode { return this.getToken(ObjectPathParser.IDENTIFIER, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ObjectPathVisitor<Result>): Result {
		if (visitor.visitDotAccess) {
			return visitor.visitDotAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BracketAccessContext extends ExpressionContext {
	public _expr1: ExpressionContext;
	public _expr2: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ObjectPathVisitor<Result>): Result {
		if (visitor.visitBracketAccess) {
			return visitor.visitBracketAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrayFilterContext extends ExpressionContext {
	public _expr1: ExpressionContext;
	public _expr2: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ObjectPathVisitor<Result>): Result {
		if (visitor.visitArrayFilter) {
			return visitor.visitArrayFilter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrayFindContext extends ExpressionContext {
	public _expr1: ExpressionContext;
	public _expr2: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ObjectPathVisitor<Result>): Result {
		if (visitor.visitArrayFind) {
			return visitor.visitArrayFind(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrayMapContext extends ExpressionContext {
	public _expr1: ExpressionContext;
	public _expr2: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ObjectPathVisitor<Result>): Result {
		if (visitor.visitArrayMap) {
			return visitor.visitArrayMap(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionContext extends ExpressionContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ObjectPathParser.IDENTIFIER, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ObjectPathVisitor<Result>): Result {
		if (visitor.visitFunction) {
			return visitor.visitFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryContext extends ExpressionContext {
	public _op: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ObjectPathVisitor<Result>): Result {
		if (visitor.visitUnary) {
			return visitor.visitUnary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryLogicalNotContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ObjectPathVisitor<Result>): Result {
		if (visitor.visitUnaryLogicalNot) {
			return visitor.visitUnaryLogicalNot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiplicativeContext extends ExpressionContext {
	public _op: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ObjectPathVisitor<Result>): Result {
		if (visitor.visitMultiplicative) {
			return visitor.visitMultiplicative(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AdditiveContext extends ExpressionContext {
	public _op: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ObjectPathVisitor<Result>): Result {
		if (visitor.visitAdditive) {
			return visitor.visitAdditive(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RelationalContext extends ExpressionContext {
	public _op: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ObjectPathVisitor<Result>): Result {
		if (visitor.visitRelational) {
			return visitor.visitRelational(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqualityContext extends ExpressionContext {
	public _op: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ObjectPathVisitor<Result>): Result {
		if (visitor.visitEquality) {
			return visitor.visitEquality(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NullishCoalescingContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ObjectPathVisitor<Result>): Result {
		if (visitor.visitNullishCoalescing) {
			return visitor.visitNullishCoalescing(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalAndContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ObjectPathVisitor<Result>): Result {
		if (visitor.visitLogicalAnd) {
			return visitor.visitLogicalAnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalOrContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ObjectPathVisitor<Result>): Result {
		if (visitor.visitLogicalOr) {
			return visitor.visitLogicalOr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConditionalContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ObjectPathVisitor<Result>): Result {
		if (visitor.visitConditional) {
			return visitor.visitConditional(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringContext extends ExpressionContext {
	public STRING(): TerminalNode { return this.getToken(ObjectPathParser.STRING, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ObjectPathVisitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumberContext extends ExpressionContext {
	public NUMBER(): TerminalNode { return this.getToken(ObjectPathParser.NUMBER, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ObjectPathVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanContext extends ExpressionContext {
	public BOOLEAN(): TerminalNode { return this.getToken(ObjectPathParser.BOOLEAN, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ObjectPathVisitor<Result>): Result {
		if (visitor.visitBoolean) {
			return visitor.visitBoolean(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NullContext extends ExpressionContext {
	public NULL(): TerminalNode { return this.getToken(ObjectPathParser.NULL, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ObjectPathVisitor<Result>): Result {
		if (visitor.visitNull) {
			return visitor.visitNull(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


