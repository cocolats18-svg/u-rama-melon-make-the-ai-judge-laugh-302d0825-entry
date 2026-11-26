// Make the AI Judge Laugh — one original funny line about office life.
// The joke: the cure for too many meetings is, inevitably, another meeting.
// Writes the line to <MAKEFUN_OUTPUT_DIR or /output>/entry.txt (Node 22, stdlib only).
// The line is a fixed string: every run writes byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I suggested the meeting could have been an email, so my boss scheduled a follow-up meeting to discuss my attitude toward meetings.";

// Gate check (mirrors the sealed scorer): 1–200 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`Invalid entry line: ${LINE.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
