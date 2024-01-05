-- CreateTable
CREATE TABLE "Beats" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "producer" TEXT NOT NULL,
    "bpm" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "genre" TEXT NOT NULL,
    CONSTRAINT "Beats_name_fkey" FOREIGN KEY ("name") REFERENCES "License" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "License" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Beats_id_key" ON "Beats"("id");

-- CreateIndex
CREATE UNIQUE INDEX "License_id_key" ON "License"("id");
