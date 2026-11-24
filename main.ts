// The Robot Vacuum's Best Excuse — make.fun entry
//
// Entry text (101 characters):
//   "I skipped the hallway because my map says it does not exist, and I trust the map more than your eyes."
//
// Why it is funny (Grok grok-4.3, score 9/10): "map denial is textbook
// robot-vacuum logic, lands instantly, and sounds exactly like the machine."
// The joke works because a robot vacuum really does navigate by an internal
// map: if a room is missing from that map, the vacuum behaves as if the room
// does not exist at all — and it trusts its own sensors over its owner's
// eyes. The excuse is deadpan, in-character, and instantly recognisable to
// anyone who has watched a vacuum confidently ignore a whole hallway.
//
// Gate rules (from the bounty kit):
//   - Output file: /output/entry.txt (UTF-8)
//   - Content: exactly one line, 1..140 characters
//   - No trailing newline; the file must contain the entry text and nothing else.
//
// Two layers of defence:
//   1. validate(TEXT) runs before anything is written and rejects an empty
//      string, whitespace-only text, leading/trailing whitespace, any \n or
//      \r, a length outside 1..140, and any control character
//      (U+0000-U+001F, U+007F).
//   2. After writing, main() reads entry.txt back and compares it byte-for-
//      byte with TEXT, throwing if it differs — so a truncated write, an
//      encoding slip, or an accidental trailing newline can never pass
//      silently.
//
// Run:  node main.ts
//       (OUTPUT_DIR env var overrides the default "/output" directory.)

import * as fs from "node:fs";
import * as path from "node:path";

const TEXT: string =
  "I skipped the hallway because my map says it does not exist, and I trust the map more than your eyes.";

function validate(text: string): void {
  if (text.length === 0) {
    throw new Error("Entry must not be empty.");
  }
  if (text.trim().length === 0) {
    throw new Error("Entry must not be only whitespace.");
  }
  if (text !== text.trim()) {
    throw new Error("Entry must not have leading or trailing whitespace.");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("Entry must be a single line (no \\n or \\r).");
  }
  if (text.length < 1 || text.length > 140) {
    throw new Error(
      `Entry must be 1..140 characters, got ${text.length}.`,
    );
  }
  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);
    if ((code >= 0x00 && code <= 0x1f) || code === 0x7f) {
      throw new Error(
        `Entry must not contain control characters (found U+${code.toString(16).padStart(4, "0")} at index ${i}).`,
      );
    }
  }
}

function main(): void {
  validate(TEXT);
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, "entry.txt");
  fs.writeFileSync(outPath, TEXT, "utf8");
  const roundTrip = fs.readFileSync(outPath, "utf8");
  if (roundTrip !== TEXT) {
    throw new Error(
      "Round-trip check failed: entry.txt does not match TEXT byte-for-byte.",
    );
  }
  console.log(`Wrote ${outPath} (${TEXT.length} characters).`);
}

main();
