import { cpSync, existsSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const destinationRoot = join(root, "public", "prototypes");
const allowedNames = new Set(["code.html", "screen.png", "DESIGN.md"]);

const sourceDirectories = readdirSync(root, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .filter(
    (name) =>
      !["node_modules", "public", "src", "scripts"].includes(name) &&
      !name.startsWith(".")
  );

if (existsSync(destinationRoot)) {
  rmSync(destinationRoot, { recursive: true, force: true });
}

mkdirSync(destinationRoot, { recursive: true });

for (const directory of sourceDirectories) {
  const from = join(root, directory);
  const to = join(destinationRoot, directory);

  cpSync(from, to, {
    recursive: true,
    filter(sourcePath) {
      const name = sourcePath.split("/").pop() ?? "";
      return sourcePath === from || allowedNames.has(name);
    }
  });
}

console.log(
  `Synced ${sourceDirectories.length} prototype directories to public/prototypes`
);
