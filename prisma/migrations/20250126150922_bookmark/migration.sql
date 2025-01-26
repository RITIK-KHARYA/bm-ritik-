/*
  Warnings:

  - You are about to drop the column `name` on the `bookmark` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "bookmark" DROP COLUMN "name",
ADD COLUMN     "title" TEXT;
