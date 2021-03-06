// Generated from grammar/ObjectPath.g4 by ANTLR 4.7.3-SNAPSHOT


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
	public static readonly T__26 = 27;
	public static readonly STRING = 28;
	public static readonly NUMBER = 29;
	public static readonly BOOLEAN = 30;
	public static readonly NULL = 31;
	public static readonly IDENTIFIER = 32;
	public static readonly WHITESPACE = 33;

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
		"T__25", "T__26", "STRING", "NUMBER", "BOOLEAN", "NULL", "IDENTIFIER", 
		"WHITESPACE",
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02#\xBD\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03" +
		"\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03" +
		"\x14\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03" +
		"\x17\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x07\x1D\x92\n\x1D" +
		"\f\x1D\x0E\x1D\x95\v\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x07\x1E" +
		"\x9C\n\x1E\f\x1E\x0E\x1E\x9F\v\x1E\x05\x1E\xA1\n\x1E\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\xAC\n\x1F" +
		"\x03 \x03 \x03 \x03 \x03 \x03!\x03!\x07!\xB5\n!\f!\x0E!\xB8\v!\x03\"\x03" +
		"\"\x03\"\x03\"\x02\x02\x02#\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02" +
		"\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02" +
		"\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%" +
		"\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B" +
		"5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02\"C\x02#\x03\x02" +
		"\x07\x03\x02))\x03\x023;\x03\x022;\x06\x02&&C\\aac|\x07\x02&&2;C\\aac" +
		"|\x02\xC1\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03" +
		"\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02" +
		"\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02" +
		"\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02" +
		"\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02" +
		"\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02" +
		"\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-" +
		"\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02" +
		"\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02" +
		"\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03" +
		"\x02\x02\x02\x02C\x03\x02\x02\x02\x03E\x03\x02\x02\x02\x05G\x03\x02\x02" +
		"\x02\x07I\x03\x02\x02\x02\tK\x03\x02\x02\x02\vM\x03\x02\x02\x02\rO\x03" +
		"\x02\x02\x02\x0FQ\x03\x02\x02\x02\x11S\x03\x02\x02\x02\x13Y\x03\x02\x02" +
		"\x02\x15a\x03\x02\x02\x02\x17f\x03\x02\x02\x02\x19h\x03\x02\x02\x02\x1B" +
		"j\x03\x02\x02\x02\x1Dl\x03\x02\x02\x02\x1Fn\x03\x02\x02\x02!p\x03\x02" +
		"\x02\x02#r\x03\x02\x02\x02%t\x03\x02\x02\x02\'v\x03\x02\x02\x02)y\x03" +
		"\x02\x02\x02+|\x03\x02\x02\x02-\x7F\x03\x02\x02\x02/\x82\x03\x02\x02\x02" +
		"1\x85\x03\x02\x02\x023\x88\x03\x02\x02\x025\x8B\x03\x02\x02\x027\x8D\x03" +
		"\x02\x02\x029\x8F\x03\x02\x02\x02;\xA0\x03\x02\x02\x02=\xAB\x03\x02\x02" +
		"\x02?\xAD\x03\x02\x02\x02A\xB2\x03\x02\x02\x02C\xB9\x03\x02\x02\x02EF" +
		"\x07*\x02\x02F\x04\x03\x02\x02\x02GH\x07+\x02\x02H\x06\x03\x02\x02\x02" +
		"IJ\x07&\x02\x02J\b\x03\x02\x02\x02KL\x07B\x02\x02L\n\x03\x02\x02\x02M" +
		"N\x070\x02\x02N\f\x03\x02\x02\x02OP\x07]\x02\x02P\x0E\x03\x02\x02\x02" +
		"QR\x07_\x02\x02R\x10\x03\x02\x02\x02ST\x07h\x02\x02TU\x07k\x02\x02UV\x07" +
		"p\x02\x02VW\x07f\x02\x02WX\x07*\x02\x02X\x12\x03\x02\x02\x02YZ\x07h\x02" +
		"\x02Z[\x07k\x02\x02[\\\x07n\x02\x02\\]\x07v\x02\x02]^\x07g\x02\x02^_\x07" +
		"t\x02\x02_`\x07*\x02\x02`\x14\x03\x02\x02\x02ab\x07o\x02\x02bc\x07c\x02" +
		"\x02cd\x07r\x02\x02de\x07*\x02\x02e\x16\x03\x02\x02\x02fg\x07.\x02\x02" +
		"g\x18\x03\x02\x02\x02hi\x07-\x02\x02i\x1A\x03\x02\x02\x02jk\x07/\x02\x02" +
		"k\x1C\x03\x02\x02\x02lm\x07#\x02\x02m\x1E\x03\x02\x02\x02no\x07,\x02\x02" +
		"o \x03\x02\x02\x02pq\x071\x02\x02q\"\x03\x02\x02\x02rs\x07>\x02\x02s$" +
		"\x03\x02\x02\x02tu\x07@\x02\x02u&\x03\x02\x02\x02vw\x07>\x02\x02wx\x07" +
		"?\x02\x02x(\x03\x02\x02\x02yz\x07@\x02\x02z{\x07?\x02\x02{*\x03\x02\x02" +
		"\x02|}\x07?\x02\x02}~\x07?\x02\x02~,\x03\x02\x02\x02\x7F\x80\x07#\x02" +
		"\x02\x80\x81\x07?\x02\x02\x81.\x03\x02\x02\x02\x82\x83\x07A\x02\x02\x83" +
		"\x84\x07A\x02\x02\x840\x03\x02\x02\x02\x85\x86\x07(\x02\x02\x86\x87\x07" +
		"(\x02\x02\x872\x03\x02\x02\x02\x88\x89\x07~\x02\x02\x89\x8A\x07~\x02\x02" +
		"\x8A4\x03\x02\x02\x02\x8B\x8C\x07A\x02\x02\x8C6\x03\x02\x02\x02\x8D\x8E" +
		"\x07<\x02\x02\x8E8\x03\x02\x02\x02\x8F\x93\x07)\x02\x02\x90\x92\n\x02" +
		"\x02\x02\x91\x90\x03\x02\x02\x02\x92\x95\x03\x02\x02\x02\x93\x91\x03\x02" +
		"\x02\x02\x93\x94\x03\x02\x02\x02\x94\x96\x03\x02\x02\x02\x95\x93\x03\x02" +
		"\x02\x02\x96\x97\x07)\x02\x02\x97:\x03\x02\x02\x02\x98\xA1\x072\x02\x02" +
		"\x99\x9D\t\x03\x02\x02\x9A\x9C\t\x04\x02\x02\x9B\x9A\x03\x02\x02\x02\x9C" +
		"\x9F\x03\x02\x02\x02\x9D\x9B\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E" +
		"\xA1\x03\x02\x02\x02\x9F\x9D\x03\x02\x02\x02\xA0\x98\x03\x02\x02\x02\xA0" +
		"\x99\x03\x02\x02\x02\xA1<\x03\x02\x02\x02\xA2\xA3\x07v\x02\x02\xA3\xA4" +
		"\x07t\x02\x02\xA4\xA5\x07w\x02\x02\xA5\xAC\x07g\x02\x02\xA6\xA7\x07h\x02" +
		"\x02\xA7\xA8\x07c\x02\x02\xA8\xA9\x07n\x02\x02\xA9\xAA\x07u\x02\x02\xAA" +
		"\xAC\x07g\x02\x02\xAB\xA2\x03\x02\x02\x02\xAB\xA6\x03\x02\x02\x02\xAC" +
		">\x03\x02\x02\x02\xAD\xAE\x07p\x02\x02\xAE\xAF\x07w\x02\x02\xAF\xB0\x07" +
		"n\x02\x02\xB0\xB1\x07n\x02\x02\xB1@\x03\x02\x02\x02\xB2\xB6\t\x05\x02" +
		"\x02\xB3\xB5\t\x06\x02\x02\xB4\xB3\x03\x02\x02\x02\xB5\xB8\x03\x02\x02" +
		"\x02\xB6\xB4\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7B\x03\x02\x02" +
		"\x02\xB8\xB6\x03\x02\x02\x02\xB9\xBA\x07\"\x02\x02\xBA\xBB\x03\x02\x02" +
		"\x02\xBB\xBC\b\"\x02\x02\xBCD\x03\x02\x02\x02\b\x02\x93\x9D\xA0\xAB\xB6" +
		"\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ObjectPathLexer.__ATN) {
			ObjectPathLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ObjectPathLexer._serializedATN));
		}

		return ObjectPathLexer.__ATN;
	}

}

