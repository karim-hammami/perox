-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Beats" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "producer" TEXT NOT NULL,
    "bpm" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "genre" TEXT NOT NULL,
    CONSTRAINT "Beats_id_fkey" FOREIGN KEY ("id") REFERENCES "License" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Beats" ("bpm", "genre", "id", "name", "price", "producer") SELECT "bpm", "genre", "id", "name", "price", "producer" FROM "Beats";
DROP TABLE "Beats";
ALTER TABLE "new_Beats" RENAME TO "Beats";
CREATE UNIQUE INDEX "Beats_id_key" ON "Beats"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
