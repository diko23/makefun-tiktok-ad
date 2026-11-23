import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

const MAX_VIDEO_BYTES = 16384;
const MAX_URL_LENGTH = 2048;

interface Paths {
  sourceFile: string;
  targetDir: string;
  targetFile: string;
}

function getEnvPath(name: string, fallback: string): string {
  const raw = process.env[name];
  return resolve(raw && raw.trim().length > 0 ? raw.trim() : fallback);
}

function resolvePaths(): Paths {
  const botDir = getEnvPath("MAKEFUN_BOT_DIR", "/bot");
  const targetDir = getEnvPath("MAKEFUN_OUTPUT_DIR", "/output");
  return {
    sourceFile: join(botDir, "VIDEO.json"),
    targetDir,
    targetFile: join(targetDir, "VIDEO.json"),
  };
}

function assertValidVideoFile(sourceFile: string): void {
  if (!existsSync(sourceFile)) {
    throw new Error(`Missing VIDEO.json at ${sourceFile}`);
  }
  const info = statSync(sourceFile);
  if (!info.isFile() || info.size === 0 || info.size > MAX_VIDEO_BYTES) {
    throw new Error(`Invalid VIDEO.json file size: ${info.size}`);
  }
  const parsed: unknown = JSON.parse(readFileSync(sourceFile, "utf8"));
  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
    throw new Error("VIDEO.json must be a JSON object");
  }
  const url = (parsed as { url?: unknown }).url;
  if (typeof url !== "string" || url.trim().length === 0 || url.length > MAX_URL_LENGTH) {
    throw new Error("VIDEO.json must include a valid url string");
  }
}

function main(): void {
  const { sourceFile, targetDir, targetFile } = resolvePaths();
  assertValidVideoFile(sourceFile);
  mkdirSync(targetDir, { recursive: true });
  copyFileSync(sourceFile, targetFile);
}

try {
  main();
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  process.stderr.write(`${message}\n`);
  process.exit(1);
}
