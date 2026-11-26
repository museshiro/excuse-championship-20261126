import { mkdirSync, writeFileSync } from "node:fs";

// One line, exactly as judged: no setup, no trailing newline.
const LINE =
  "I deleted Q3_budget_final_final.xlsx because your naming tripped my duplicate detector; trash emptied at 3:14pm, as scheduled.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
