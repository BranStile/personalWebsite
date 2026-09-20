-- AlterTable
ALTER TABLE "Experience" ALTER COLUMN "company" SET DEFAULT 'Change Me',
ALTER COLUMN "startDate" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "description" SET DEFAULT 'Change Me',
ALTER COLUMN "title" SET DEFAULT 'Change Me';

-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "title" SET DEFAULT 'Change Me',
ALTER COLUMN "description" SET DEFAULT 'Change Me',
ALTER COLUMN "skillsUsed" SET DEFAULT 'Change Me';

-- AlterTable
ALTER TABLE "Skill" ALTER COLUMN "name" SET DEFAULT 'Change Me',
ALTER COLUMN "category" SET DEFAULT 'Change Me';
