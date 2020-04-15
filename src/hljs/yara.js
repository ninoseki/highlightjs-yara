/*
Language: YARA
Description: YARA is the pattern matching swiss knife
Website: https://github.com/virustotal/yara
*/

export default function (hljs) {
  return {
    name: "YARA",
    aliases: ["yara", "yar"],
    case_insensitive: false,
    keywords: {
      built_in:
        "all and any ascii at condition contains entrypoint false filesize fullword for global in import include int8 int16 int32 int8be int16be int32be matches meta nocase not or of private rule strings them true uint8 uint16 uint32 uint8be uint16be uint32be wide xor",
    },
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.QUOTE_STRING_MODE,
      // HEX string,
      {
        className: "string",
        begin: "=\\s*{",
        end: "}",
        excludeBegin: true,
        excludeEnd: true,
      },
      // string identifier
      {
        className: "symbol",
        begin: "\\$[a-zA-Z0-9_]+",
      },
    ],
  };
}
