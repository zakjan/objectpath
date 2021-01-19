// Generated from ObjectPath.g4 by ANTLR 4.7.2
package cz.zakjan.objectpath.parser;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class ObjectPathParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, STRING=28, NUMBER=29, BOOLEAN=30, NULL=31, 
		IDENTIFIER=32, WHITESPACE=33;
	public static final int
		RULE_start = 0, RULE_expression = 1;
	private static String[] makeRuleNames() {
		return new String[] {
			"start", "expression"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'('", "')'", "'$'", "'@'", "'.'", "'['", "']'", "'find('", "'filter('", 
			"'map('", "','", "'+'", "'-'", "'!'", "'*'", "'/'", "'<'", "'>'", "'<='", 
			"'>='", "'=='", "'!='", "'??'", "'&&'", "'||'", "'?'", "':'", null, null, 
			null, "'null'", null, "' '"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, "STRING", "NUMBER", "BOOLEAN", "NULL", "IDENTIFIER", 
			"WHITESPACE"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "ObjectPath.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public ObjectPathParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class StartContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(ObjectPathParser.EOF, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public StartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_start; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ObjectPathVisitor ) return ((ObjectPathVisitor<? extends T>)visitor).visitStart(this);
			else return visitor.visitChildren(this);
		}
	}

	public final StartContext start() throws RecognitionException {
		StartContext _localctx = new StartContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_start);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(5);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__2) | (1L << T__3) | (1L << T__5) | (1L << T__7) | (1L << T__8) | (1L << T__9) | (1L << T__11) | (1L << T__12) | (1L << T__13) | (1L << STRING) | (1L << NUMBER) | (1L << BOOLEAN) | (1L << NULL) | (1L << IDENTIFIER))) != 0)) {
				{
				setState(4);
				expression(0);
				}
			}

			setState(7);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	 
		public ExpressionContext() { }
		public void copyFrom(ExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ArrayFilterContext extends ExpressionContext {
		public ExpressionContext expr1;
		public ExpressionContext expr2;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public ArrayFilterContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ObjectPathVisitor ) return ((ObjectPathVisitor<? extends T>)visitor).visitArrayFilter(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class DotAccessContext extends ExpressionContext {
		public ExpressionContext expr1;
		public TerminalNode IDENTIFIER() { return getToken(ObjectPathParser.IDENTIFIER, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public DotAccessContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ObjectPathVisitor ) return ((ObjectPathVisitor<? extends T>)visitor).visitDotAccess(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class NullContext extends ExpressionContext {
		public TerminalNode NULL() { return getToken(ObjectPathParser.NULL, 0); }
		public NullContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ObjectPathVisitor ) return ((ObjectPathVisitor<? extends T>)visitor).visitNull(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class UnaryLogicalNotContext extends ExpressionContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public UnaryLogicalNotContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ObjectPathVisitor ) return ((ObjectPathVisitor<? extends T>)visitor).visitUnaryLogicalNot(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class RelationalContext extends ExpressionContext {
		public Token op;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public RelationalContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ObjectPathVisitor ) return ((ObjectPathVisitor<? extends T>)visitor).visitRelational(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ArrayMapContext extends ExpressionContext {
		public ExpressionContext expr1;
		public ExpressionContext expr2;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public ArrayMapContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ObjectPathVisitor ) return ((ObjectPathVisitor<? extends T>)visitor).visitArrayMap(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ConditionalContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public ConditionalContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ObjectPathVisitor ) return ((ObjectPathVisitor<? extends T>)visitor).visitConditional(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class StringContext extends ExpressionContext {
		public TerminalNode STRING() { return getToken(ObjectPathParser.STRING, 0); }
		public StringContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ObjectPathVisitor ) return ((ObjectPathVisitor<? extends T>)visitor).visitString(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class RootObjectContext extends ExpressionContext {
		public RootObjectContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ObjectPathVisitor ) return ((ObjectPathVisitor<? extends T>)visitor).visitRootObject(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class BracketAccessContext extends ExpressionContext {
		public ExpressionContext expr1;
		public ExpressionContext expr2;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public BracketAccessContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ObjectPathVisitor ) return ((ObjectPathVisitor<? extends T>)visitor).visitBracketAccess(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class UnaryContext extends ExpressionContext {
		public Token op;
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public UnaryContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ObjectPathVisitor ) return ((ObjectPathVisitor<? extends T>)visitor).visitUnary(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class NullishCoalescingContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public NullishCoalescingContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ObjectPathVisitor ) return ((ObjectPathVisitor<? extends T>)visitor).visitNullishCoalescing(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class LogicalOrContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public LogicalOrContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ObjectPathVisitor ) return ((ObjectPathVisitor<? extends T>)visitor).visitLogicalOr(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ArrayFindContext extends ExpressionContext {
		public ExpressionContext expr1;
		public ExpressionContext expr2;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public ArrayFindContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ObjectPathVisitor ) return ((ObjectPathVisitor<? extends T>)visitor).visitArrayFind(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class FunctionContext extends ExpressionContext {
		public TerminalNode IDENTIFIER() { return getToken(ObjectPathParser.IDENTIFIER, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public FunctionContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ObjectPathVisitor ) return ((ObjectPathVisitor<? extends T>)visitor).visitFunction(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class MultiplicativeContext extends ExpressionContext {
		public Token op;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public MultiplicativeContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ObjectPathVisitor ) return ((ObjectPathVisitor<? extends T>)visitor).visitMultiplicative(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class AdditiveContext extends ExpressionContext {
		public Token op;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public AdditiveContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ObjectPathVisitor ) return ((ObjectPathVisitor<? extends T>)visitor).visitAdditive(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class NumberContext extends ExpressionContext {
		public TerminalNode NUMBER() { return getToken(ObjectPathParser.NUMBER, 0); }
		public NumberContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ObjectPathVisitor ) return ((ObjectPathVisitor<? extends T>)visitor).visitNumber(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class LogicalAndContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public LogicalAndContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ObjectPathVisitor ) return ((ObjectPathVisitor<? extends T>)visitor).visitLogicalAnd(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class CurrentObjectContext extends ExpressionContext {
		public CurrentObjectContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ObjectPathVisitor ) return ((ObjectPathVisitor<? extends T>)visitor).visitCurrentObject(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class EqualityContext extends ExpressionContext {
		public Token op;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public EqualityContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ObjectPathVisitor ) return ((ObjectPathVisitor<? extends T>)visitor).visitEquality(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class BooleanContext extends ExpressionContext {
		public TerminalNode BOOLEAN() { return getToken(ObjectPathParser.BOOLEAN, 0); }
		public BooleanContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ObjectPathVisitor ) return ((ObjectPathVisitor<? extends T>)visitor).visitBoolean(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ParenthesesContext extends ExpressionContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ParenthesesContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ObjectPathVisitor ) return ((ObjectPathVisitor<? extends T>)visitor).visitParentheses(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 2;
		enterRecursionRule(_localctx, 2, RULE_expression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(55);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				{
				_localctx = new ParenthesesContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(10);
				match(T__0);
				setState(11);
				expression(0);
				setState(12);
				match(T__1);
				}
				break;
			case 2:
				{
				_localctx = new RootObjectContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(14);
				match(T__2);
				}
				break;
			case 3:
				{
				_localctx = new CurrentObjectContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(15);
				match(T__3);
				}
				break;
			case 4:
				{
				_localctx = new DotAccessContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(16);
				match(IDENTIFIER);
				}
				break;
			case 5:
				{
				_localctx = new BracketAccessContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(17);
				match(T__5);
				setState(18);
				((BracketAccessContext)_localctx).expr2 = expression(0);
				setState(19);
				match(T__6);
				}
				break;
			case 6:
				{
				_localctx = new ArrayFilterContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(21);
				match(T__7);
				setState(22);
				((ArrayFilterContext)_localctx).expr2 = expression(0);
				setState(23);
				match(T__1);
				}
				break;
			case 7:
				{
				_localctx = new ArrayFilterContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(25);
				match(T__8);
				setState(26);
				((ArrayFilterContext)_localctx).expr2 = expression(0);
				setState(27);
				match(T__1);
				}
				break;
			case 8:
				{
				_localctx = new ArrayMapContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(29);
				match(T__9);
				setState(30);
				((ArrayMapContext)_localctx).expr2 = expression(0);
				setState(31);
				match(T__1);
				}
				break;
			case 9:
				{
				_localctx = new FunctionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(33);
				match(IDENTIFIER);
				setState(34);
				match(T__0);
				setState(44);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__2) | (1L << T__3) | (1L << T__5) | (1L << T__7) | (1L << T__8) | (1L << T__9) | (1L << T__11) | (1L << T__12) | (1L << T__13) | (1L << STRING) | (1L << NUMBER) | (1L << BOOLEAN) | (1L << NULL) | (1L << IDENTIFIER))) != 0)) {
					{
					setState(40);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,1,_ctx);
					while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
						if ( _alt==1 ) {
							{
							{
							setState(35);
							expression(0);
							setState(36);
							match(T__10);
							}
							} 
						}
						setState(42);
						_errHandler.sync(this);
						_alt = getInterpreter().adaptivePredict(_input,1,_ctx);
					}
					setState(43);
					expression(0);
					}
				}

				setState(46);
				match(T__1);
				}
				break;
			case 10:
				{
				_localctx = new UnaryContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(47);
				((UnaryContext)_localctx).op = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==T__11 || _la==T__12) ) {
					((UnaryContext)_localctx).op = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(48);
				expression(14);
				}
				break;
			case 11:
				{
				_localctx = new UnaryLogicalNotContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(49);
				match(T__13);
				setState(50);
				expression(13);
				}
				break;
			case 12:
				{
				_localctx = new StringContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(51);
				match(STRING);
				}
				break;
			case 13:
				{
				_localctx = new NumberContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(52);
				match(NUMBER);
				}
				break;
			case 14:
				{
				_localctx = new BooleanContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(53);
				match(BOOLEAN);
				}
				break;
			case 15:
				{
				_localctx = new NullContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(54);
				match(NULL);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(112);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(110);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
					case 1:
						{
						_localctx = new MultiplicativeContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(57);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(58);
						((MultiplicativeContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==T__14 || _la==T__15) ) {
							((MultiplicativeContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(59);
						expression(13);
						}
						break;
					case 2:
						{
						_localctx = new AdditiveContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(60);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(61);
						((AdditiveContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==T__11 || _la==T__12) ) {
							((AdditiveContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(62);
						expression(12);
						}
						break;
					case 3:
						{
						_localctx = new RelationalContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(63);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(64);
						((RelationalContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__16) | (1L << T__17) | (1L << T__18) | (1L << T__19))) != 0)) ) {
							((RelationalContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(65);
						expression(11);
						}
						break;
					case 4:
						{
						_localctx = new EqualityContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(66);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(67);
						((EqualityContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==T__20 || _la==T__21) ) {
							((EqualityContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(68);
						expression(10);
						}
						break;
					case 5:
						{
						_localctx = new NullishCoalescingContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(69);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(70);
						match(T__22);
						setState(71);
						expression(9);
						}
						break;
					case 6:
						{
						_localctx = new LogicalAndContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(72);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(73);
						match(T__23);
						setState(74);
						expression(8);
						}
						break;
					case 7:
						{
						_localctx = new LogicalOrContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(75);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(76);
						match(T__24);
						setState(77);
						expression(7);
						}
						break;
					case 8:
						{
						_localctx = new ConditionalContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(78);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(79);
						match(T__25);
						setState(80);
						expression(0);
						setState(81);
						match(T__26);
						setState(82);
						expression(5);
						}
						break;
					case 9:
						{
						_localctx = new DotAccessContext(new ExpressionContext(_parentctx, _parentState));
						((DotAccessContext)_localctx).expr1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(84);
						if (!(precpred(_ctx, 24))) throw new FailedPredicateException(this, "precpred(_ctx, 24)");
						setState(85);
						match(T__4);
						setState(86);
						match(IDENTIFIER);
						}
						break;
					case 10:
						{
						_localctx = new BracketAccessContext(new ExpressionContext(_parentctx, _parentState));
						((BracketAccessContext)_localctx).expr1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(87);
						if (!(precpred(_ctx, 22))) throw new FailedPredicateException(this, "precpred(_ctx, 22)");
						setState(88);
						match(T__5);
						setState(89);
						((BracketAccessContext)_localctx).expr2 = expression(0);
						setState(90);
						match(T__6);
						}
						break;
					case 11:
						{
						_localctx = new ArrayFindContext(new ExpressionContext(_parentctx, _parentState));
						((ArrayFindContext)_localctx).expr1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(92);
						if (!(precpred(_ctx, 20))) throw new FailedPredicateException(this, "precpred(_ctx, 20)");
						setState(93);
						match(T__4);
						setState(94);
						match(T__7);
						setState(95);
						((ArrayFindContext)_localctx).expr2 = expression(0);
						setState(96);
						match(T__1);
						}
						break;
					case 12:
						{
						_localctx = new ArrayFilterContext(new ExpressionContext(_parentctx, _parentState));
						((ArrayFilterContext)_localctx).expr1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(98);
						if (!(precpred(_ctx, 18))) throw new FailedPredicateException(this, "precpred(_ctx, 18)");
						setState(99);
						match(T__4);
						setState(100);
						match(T__8);
						setState(101);
						((ArrayFilterContext)_localctx).expr2 = expression(0);
						setState(102);
						match(T__1);
						}
						break;
					case 13:
						{
						_localctx = new ArrayMapContext(new ExpressionContext(_parentctx, _parentState));
						((ArrayMapContext)_localctx).expr1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(104);
						if (!(precpred(_ctx, 16))) throw new FailedPredicateException(this, "precpred(_ctx, 16)");
						setState(105);
						match(T__4);
						setState(106);
						match(T__9);
						setState(107);
						((ArrayMapContext)_localctx).expr2 = expression(0);
						setState(108);
						match(T__1);
						}
						break;
					}
					} 
				}
				setState(114);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 1:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 12);
		case 1:
			return precpred(_ctx, 11);
		case 2:
			return precpred(_ctx, 10);
		case 3:
			return precpred(_ctx, 9);
		case 4:
			return precpred(_ctx, 8);
		case 5:
			return precpred(_ctx, 7);
		case 6:
			return precpred(_ctx, 6);
		case 7:
			return precpred(_ctx, 5);
		case 8:
			return precpred(_ctx, 24);
		case 9:
			return precpred(_ctx, 22);
		case 10:
			return precpred(_ctx, 20);
		case 11:
			return precpred(_ctx, 18);
		case 12:
			return precpred(_ctx, 16);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3#v\4\2\t\2\4\3\t\3"+
		"\3\2\5\2\b\n\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\7"+
		"\3)\n\3\f\3\16\3,\13\3\3\3\5\3/\n\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\5\3:\n\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\7\3q\n\3\f\3\16\3t\13\3\3\3\2\3\4\4\2\4\2\6\3\2\16\17\3"+
		"\2\21\22\3\2\23\26\3\2\27\30\2\u0091\2\7\3\2\2\2\49\3\2\2\2\6\b\5\4\3"+
		"\2\7\6\3\2\2\2\7\b\3\2\2\2\b\t\3\2\2\2\t\n\7\2\2\3\n\3\3\2\2\2\13\f\b"+
		"\3\1\2\f\r\7\3\2\2\r\16\5\4\3\2\16\17\7\4\2\2\17:\3\2\2\2\20:\7\5\2\2"+
		"\21:\7\6\2\2\22:\7\"\2\2\23\24\7\b\2\2\24\25\5\4\3\2\25\26\7\t\2\2\26"+
		":\3\2\2\2\27\30\7\n\2\2\30\31\5\4\3\2\31\32\7\4\2\2\32:\3\2\2\2\33\34"+
		"\7\13\2\2\34\35\5\4\3\2\35\36\7\4\2\2\36:\3\2\2\2\37 \7\f\2\2 !\5\4\3"+
		"\2!\"\7\4\2\2\":\3\2\2\2#$\7\"\2\2$.\7\3\2\2%&\5\4\3\2&\'\7\r\2\2\')\3"+
		"\2\2\2(%\3\2\2\2),\3\2\2\2*(\3\2\2\2*+\3\2\2\2+-\3\2\2\2,*\3\2\2\2-/\5"+
		"\4\3\2.*\3\2\2\2./\3\2\2\2/\60\3\2\2\2\60:\7\4\2\2\61\62\t\2\2\2\62:\5"+
		"\4\3\20\63\64\7\20\2\2\64:\5\4\3\17\65:\7\36\2\2\66:\7\37\2\2\67:\7 \2"+
		"\28:\7!\2\29\13\3\2\2\29\20\3\2\2\29\21\3\2\2\29\22\3\2\2\29\23\3\2\2"+
		"\29\27\3\2\2\29\33\3\2\2\29\37\3\2\2\29#\3\2\2\29\61\3\2\2\29\63\3\2\2"+
		"\29\65\3\2\2\29\66\3\2\2\29\67\3\2\2\298\3\2\2\2:r\3\2\2\2;<\f\16\2\2"+
		"<=\t\3\2\2=q\5\4\3\17>?\f\r\2\2?@\t\2\2\2@q\5\4\3\16AB\f\f\2\2BC\t\4\2"+
		"\2Cq\5\4\3\rDE\f\13\2\2EF\t\5\2\2Fq\5\4\3\fGH\f\n\2\2HI\7\31\2\2Iq\5\4"+
		"\3\13JK\f\t\2\2KL\7\32\2\2Lq\5\4\3\nMN\f\b\2\2NO\7\33\2\2Oq\5\4\3\tPQ"+
		"\f\7\2\2QR\7\34\2\2RS\5\4\3\2ST\7\35\2\2TU\5\4\3\7Uq\3\2\2\2VW\f\32\2"+
		"\2WX\7\7\2\2Xq\7\"\2\2YZ\f\30\2\2Z[\7\b\2\2[\\\5\4\3\2\\]\7\t\2\2]q\3"+
		"\2\2\2^_\f\26\2\2_`\7\7\2\2`a\7\n\2\2ab\5\4\3\2bc\7\4\2\2cq\3\2\2\2de"+
		"\f\24\2\2ef\7\7\2\2fg\7\13\2\2gh\5\4\3\2hi\7\4\2\2iq\3\2\2\2jk\f\22\2"+
		"\2kl\7\7\2\2lm\7\f\2\2mn\5\4\3\2no\7\4\2\2oq\3\2\2\2p;\3\2\2\2p>\3\2\2"+
		"\2pA\3\2\2\2pD\3\2\2\2pG\3\2\2\2pJ\3\2\2\2pM\3\2\2\2pP\3\2\2\2pV\3\2\2"+
		"\2pY\3\2\2\2p^\3\2\2\2pd\3\2\2\2pj\3\2\2\2qt\3\2\2\2rp\3\2\2\2rs\3\2\2"+
		"\2s\5\3\2\2\2tr\3\2\2\2\b\7*.9pr";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}