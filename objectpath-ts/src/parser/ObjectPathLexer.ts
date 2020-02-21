// Generated from ../grammar/ObjectPath.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class ObjectPathLexer extends Lexer {
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
	public static readonly STRING = 27;
	public static readonly NUMBER = 28;
	public static readonly BOOLEAN = 29;
	public static readonly NULL = 30;
	public static readonly IDENTIFIER = 31;
	public static readonly WHITESPACE = 32;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
		"T__25", "STRING", "NUMBER", "BOOLEAN", "NULL", "IDENTIFIER", "WHITESPACE",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'$'", "'@'", "'.'", "'['", "']'", "'filter('", 
		"'map('", "','", "'+'", "'-'", "'!'", "'*'", "'/'", "'<'", "'>'", "'<='", 
		"'>='", "'=='", "'!='", "'??'", "'&&'", "'||'", "'?'", "':'", undefined, 
		undefined, undefined, "'null'", undefined, "' '",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "STRING", 
		"NUMBER", "BOOLEAN", "NULL", "IDENTIFIER", "WHITESPACE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ObjectPathLexer._LITERAL_NAMES, ObjectPathLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ObjectPathLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(ObjectPathLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "ObjectPath.g4"; }

	// @Override
	public get ruleNames(): string[] { return ObjectPathLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return ObjectPathLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return ObjectPathLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return ObjectPathLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\"\xB8\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03" +
		"\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03" +
		"\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03" +
		"\x12\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03" +
		"\x15\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03" +
		"\x18\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03" +
		"\x1C\x07\x1C\x8A\n\x1C\f\x1C\x0E\x1C\x8D\v\x1C\x03\x1C\x03\x1C\x03\x1D" +
		"\x05\x1D\x92\n\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\x97\n\x1D\f\x1D\x0E" +
		"\x1D\x9A\v\x1D\x05\x1D\x9C\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\xA7\n\x1E\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03 \x03 \x07 \xB0\n \f \x0E \xB3\v \x03!\x03!\x03" +
		"!\x03!\x02\x02\x02\"\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02" +
		"\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02" +
		"\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\'" +
		"\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C" +
		"7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02\"\x03\x02\x07\x03\x02))\x03" +
		"\x023;\x03\x022;\x06\x02&&C\\aac|\x07\x02&&2;C\\aac|\x02\xBD\x02\x03\x03" +
		"\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03" +
		"\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02" +
		"\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02" +
		"\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02" +
		"\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02" +
		"\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02" +
		"\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03" +
		"\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02" +
		"\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02" +
		"=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x03C\x03\x02" +
		"\x02\x02\x05E\x03\x02\x02\x02\x07G\x03\x02\x02\x02\tI\x03\x02\x02\x02" +
		"\vK\x03\x02\x02\x02\rM\x03\x02\x02\x02\x0FO\x03\x02\x02\x02\x11Q\x03\x02" +
		"\x02\x02\x13Y\x03\x02\x02\x02\x15^\x03\x02\x02\x02\x17`\x03\x02\x02\x02" +
		"\x19b\x03\x02\x02\x02\x1Bd\x03\x02\x02\x02\x1Df\x03\x02\x02\x02\x1Fh\x03" +
		"\x02\x02\x02!j\x03\x02\x02\x02#l\x03\x02\x02\x02%n\x03\x02\x02\x02\'q" +
		"\x03\x02\x02\x02)t\x03\x02\x02\x02+w\x03\x02\x02\x02-z\x03\x02\x02\x02" +
		"/}\x03\x02\x02\x021\x80\x03\x02\x02\x023\x83\x03\x02\x02\x025\x85\x03" +
		"\x02\x02\x027\x87\x03\x02\x02\x029\x91\x03\x02\x02\x02;\xA6\x03\x02\x02" +
		"\x02=\xA8\x03\x02\x02\x02?\xAD\x03\x02\x02\x02A\xB4\x03\x02\x02\x02CD" +
		"\x07*\x02\x02D\x04\x03\x02\x02\x02EF\x07+\x02\x02F\x06\x03\x02\x02\x02" +
		"GH\x07&\x02\x02H\b\x03\x02\x02\x02IJ\x07B\x02\x02J\n\x03\x02\x02\x02K" +
		"L\x070\x02\x02L\f\x03\x02\x02\x02MN\x07]\x02\x02N\x0E\x03\x02\x02\x02" +
		"OP\x07_\x02\x02P\x10\x03\x02\x02\x02QR\x07h\x02\x02RS\x07k\x02\x02ST\x07" +
		"n\x02\x02TU\x07v\x02\x02UV\x07g\x02\x02VW\x07t\x02\x02WX\x07*\x02\x02" +
		"X\x12\x03\x02\x02\x02YZ\x07o\x02\x02Z[\x07c\x02\x02[\\\x07r\x02\x02\\" +
		"]\x07*\x02\x02]\x14\x03\x02\x02\x02^_\x07.\x02\x02_\x16\x03\x02\x02\x02" +
		"`a\x07-\x02\x02a\x18\x03\x02\x02\x02bc\x07/\x02\x02c\x1A\x03\x02\x02\x02" +
		"de\x07#\x02\x02e\x1C\x03\x02\x02\x02fg\x07,\x02\x02g\x1E\x03\x02\x02\x02" +
		"hi\x071\x02\x02i \x03\x02\x02\x02jk\x07>\x02\x02k\"\x03\x02\x02\x02lm" +
		"\x07@\x02\x02m$\x03\x02\x02\x02no\x07>\x02\x02op\x07?\x02\x02p&\x03\x02" +
		"\x02\x02qr\x07@\x02\x02rs\x07?\x02\x02s(\x03\x02\x02\x02tu\x07?\x02\x02" +
		"uv\x07?\x02\x02v*\x03\x02\x02\x02wx\x07#\x02\x02xy\x07?\x02\x02y,\x03" +
		"\x02\x02\x02z{\x07A\x02\x02{|\x07A\x02\x02|.\x03\x02\x02\x02}~\x07(\x02" +
		"\x02~\x7F\x07(\x02\x02\x7F0\x03\x02\x02\x02\x80\x81\x07~\x02\x02\x81\x82" +
		"\x07~\x02\x02\x822\x03\x02\x02\x02\x83\x84\x07A\x02\x02\x844\x03\x02\x02" +
		"\x02\x85\x86\x07<\x02\x02\x866\x03\x02\x02\x02\x87\x8B\x07)\x02\x02\x88" +
		"\x8A\n\x02\x02\x02\x89\x88\x03\x02\x02\x02\x8A\x8D\x03\x02\x02\x02\x8B" +
		"\x89\x03\x02\x02\x02\x8B\x8C\x03\x02\x02\x02\x8C\x8E\x03\x02\x02\x02\x8D" +
		"\x8B\x03\x02\x02\x02\x8E\x8F\x07)\x02\x02\x8F8\x03\x02\x02\x02\x90\x92" +
		"\x07/\x02\x02\x91\x90\x03\x02\x02\x02\x91\x92\x03\x02\x02\x02\x92\x9B" +
		"\x03\x02\x02\x02\x93\x9C\x072\x02\x02\x94\x98\t\x03\x02\x02\x95\x97\t" +
		"\x04\x02\x02\x96\x95\x03\x02\x02\x02\x97\x9A\x03\x02\x02\x02\x98\x96\x03" +
		"\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\x9C\x03\x02\x02\x02\x9A\x98\x03" +
		"\x02\x02\x02\x9B\x93\x03\x02\x02\x02\x9B\x94\x03\x02\x02\x02\x9C:\x03" +
		"\x02\x02\x02\x9D\x9E\x07v\x02\x02\x9E\x9F\x07t\x02\x02\x9F\xA0\x07w\x02" +
		"\x02\xA0\xA7\x07g\x02\x02\xA1\xA2\x07h\x02\x02\xA2\xA3\x07c\x02\x02\xA3" +
		"\xA4\x07n\x02\x02\xA4\xA5\x07u\x02\x02\xA5\xA7\x07g\x02\x02\xA6\x9D\x03" +
		"\x02\x02\x02\xA6\xA1\x03\x02\x02\x02\xA7<\x03\x02\x02\x02\xA8\xA9\x07" +
		"p\x02\x02\xA9\xAA\x07w\x02\x02\xAA\xAB\x07n\x02\x02\xAB\xAC\x07n\x02\x02" +
		"\xAC>\x03\x02\x02\x02\xAD\xB1\t\x05\x02\x02\xAE\xB0\t\x06\x02\x02\xAF" +
		"\xAE\x03\x02\x02\x02\xB0\xB3\x03\x02\x02\x02\xB1\xAF\x03\x02\x02\x02\xB1" +
		"\xB2\x03\x02\x02\x02\xB2@\x03\x02\x02\x02\xB3\xB1\x03\x02\x02\x02\xB4" +
		"\xB5\x07\"\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xB7\b!\x02\x02\xB7B\x03" +
		"\x02\x02\x02\t\x02\x8B\x91\x98\x9B\xA6\xB1\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ObjectPathLexer.__ATN) {
			ObjectPathLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ObjectPathLexer._serializedATN));
		}

		return ObjectPathLexer.__ATN;
	}

}

