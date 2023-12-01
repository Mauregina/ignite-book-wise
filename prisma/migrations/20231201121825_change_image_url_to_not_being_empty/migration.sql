/*
  Warnings:

  - Made the column `image_url` on table `books` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_books" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "pages" INTEGER NOT NULL,
    "image_url" TEXT NOT NULL
);
INSERT INTO "new_books" ("author", "description", "id", "image_url", "pages", "title") SELECT "author", "description", "id", "image_url", "pages", "title" FROM "books";
DROP TABLE "books";
ALTER TABLE "new_books" RENAME TO "books";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
