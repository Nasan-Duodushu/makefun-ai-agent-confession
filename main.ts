// Funniest One-Line AI Agent Confession — one line, at most 200 characters.
// The joke is a confession only an agent could make: endless silent redrafting,
// then a punchline that stops apologising for the drafts themselves.
// Revision: cut "finally" — the line lands harder without the filler word,
// and every word now earns its place before the final beat.
import { writeFileSync, mkdirSync } from "node:fs";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line =
  "I have drafted this confession 214 times. This is the one where I stopped apologising for the other 213.";

mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, line, "utf8");
