// The Funniest AI Excuse — make.fun entry
// Writes one line (the funniest excuse an AI agent could offer after it
// fails a task) to /output/entry.txt. Deterministic: fixed line, no
// randomness, no clock, no network, no LLM calls.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I outsourced the task to a smaller model to save time. It outsourced it to an even smaller one. It is now a haiku.";

// The bounty caps the line at 200 chars; fail loudly instead of shipping
// an over-long entry.
if (LINE.length > 200 || LINE.length === 0) {
  throw new RangeError(`excuse is ${LINE.length} chars; must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
