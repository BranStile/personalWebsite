-- CreateTable
CREATE TABLE "AboutMe" (
    "id" TEXT NOT NULL,
    "resumeLink" TEXT NOT NULL DEFAULT '/BrandonStileResume.pdf',
    "summary" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "AboutMe_pkey" PRIMARY KEY ("id")
);
