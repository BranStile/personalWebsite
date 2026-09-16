/*
  Warnings:

  - You are about to drop the column `url` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "url",
ADD COLUMN     "DemoUrl" TEXT,
ADD COLUMN     "photoAlt" TEXT NOT NULL DEFAULT 'Picture of Brandon',
ADD COLUMN     "photoUrl" TEXT NOT NULL DEFAULT '/brandon2025-5.jpg';
