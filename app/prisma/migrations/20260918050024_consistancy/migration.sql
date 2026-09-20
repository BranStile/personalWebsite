/*
  Warnings:

  - You are about to drop the column `role` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `DemoUrl` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `photoUrl` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `techStack` on the `Project` table. All the data in the column will be lost.
  - Added the required column `title` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skillsUsed` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Experience" DROP COLUMN "role",
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "DemoUrl",
DROP COLUMN "photoUrl",
DROP COLUMN "techStack",
ADD COLUMN     "demoUrl" TEXT,
ADD COLUMN     "pageID" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "pageURL" TEXT NOT NULL DEFAULT '/',
ADD COLUMN     "photoLink" TEXT NOT NULL DEFAULT '/brandon2025-5.jpg',
ADD COLUMN     "skillsUsed" TEXT NOT NULL;
