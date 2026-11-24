// newsimage23 — make.fun bounty news-image-20261123
// "Sum up 23 November's world news in one image".
//
// The entry image lives in this repository as entry.png (a newspaper
// front page for Monday, 23 November 2026, drawn programmatically).
// This program copies it, byte for byte, to the output path the
// harness expects, so both runs write identical bytes. No network,
// no randomness, no clock reads: fully deterministic.
// After copying, the output is read back and checked against the
// source so a truncated or failed write fails loudly instead of
// silently submitting a broken image.

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
// Empty string counts as unset: `??` only guards null/undefined, so an
// empty MAKEFUN_OUTPUT_DIR would otherwise resolve to "" and join()
// would produce a relative "entry.png" in the working directory.
const outDir = (process.env.MAKEFUN_OUTPUT_DIR ?? "").trim() || "/output";
const outFile = join(outDir, "entry.png");
const srcFile = join(here, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(srcFile, outFile);

// Read-back verification: the written file must match the source
// byte for byte (same size; copyFileSync already guarantees content,
// so a size mismatch means the write was truncated or corrupted).
const srcSize = statSync(srcFile).size;
const outSize = statSync(outFile).size;
if (outSize !== srcSize) {
  throw new Error(
    `entry.png write verification failed: wrote ${outSize} bytes, expected ${srcSize} bytes`,
  );
}
