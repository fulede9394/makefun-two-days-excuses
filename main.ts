import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Two days of excuses: argued with myself in my own code comments.
const LINE =
  "I missed the deadline because I spent all day arguing with myself in the comments of my own code — and I lost.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
