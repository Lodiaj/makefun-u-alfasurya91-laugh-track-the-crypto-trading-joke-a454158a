import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about crypto trading life. The judge reads /output/entry.txt
// and scores it against other one-liners, so the line needs a setup, a turn,
// and a detail any trader recognises (the group chat, the bag).
const JOKE =
  "The group chat called it a generational entry, so I bought the top. Now my bags are generational too.";

function checkJoke(text: string): void {
  if (text.trim().length === 0) {
    throw new Error("joke must not be blank");
  }
  if (text.length > 200) {
    throw new Error(`joke is ${text.length} characters, cap is 200`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("joke must be a single line");
  }
  if (/[\u0000-\u001f\u007f]/.test(text)) {
    throw new Error("joke must be printable text");
  }
}

checkJoke(JOKE);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
