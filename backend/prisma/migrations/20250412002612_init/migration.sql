-- CreateEnum
CREATE TYPE "CollabStatus" AS ENUM ('created', 'inprogress', 'completed', 'failed');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "role" TEXT NOT NULL,
    "isOnboarded" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MentorProfile" (
    "id" TEXT NOT NULL,
    "expertise" TEXT NOT NULL,
    "experience" TEXT NOT NULL,
    "availability" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "MentorProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MenteeProfile" (
    "id" TEXT NOT NULL,
    "interests" TEXT NOT NULL,
    "goals" TEXT NOT NULL,
    "preferredSchedule" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "MenteeProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectShowcase" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "github_link" TEXT NOT NULL,
    "deployed_link" TEXT NOT NULL,
    "resource_link" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "images" TEXT[],
    "userId" TEXT NOT NULL,

    CONSTRAINT "ProjectShowcase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Collab" (
    "id" TEXT NOT NULL,
    "mentorId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" "CollabStatus" NOT NULL,

    CONSTRAINT "Collab_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CollabTasks" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "collabId" TEXT NOT NULL,
    "menteeId" TEXT NOT NULL,
    "status" "CollabStatus" NOT NULL,

    CONSTRAINT "CollabTasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CollabSubmission" (
    "id" TEXT NOT NULL,
    "collabId" TEXT NOT NULL,
    "github_link" TEXT NOT NULL,
    "resource_link" TEXT[],

    CONSTRAINT "CollabSubmission_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "MentorProfile_userId_key" ON "MentorProfile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "MenteeProfile_userId_key" ON "MenteeProfile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectShowcase_userId_key" ON "ProjectShowcase"("userId");

-- AddForeignKey
ALTER TABLE "MentorProfile" ADD CONSTRAINT "MentorProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenteeProfile" ADD CONSTRAINT "MenteeProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectShowcase" ADD CONSTRAINT "ProjectShowcase_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collab" ADD CONSTRAINT "Collab_mentorId_fkey" FOREIGN KEY ("mentorId") REFERENCES "MentorProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollabTasks" ADD CONSTRAINT "CollabTasks_collabId_fkey" FOREIGN KEY ("collabId") REFERENCES "Collab"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollabTasks" ADD CONSTRAINT "CollabTasks_menteeId_fkey" FOREIGN KEY ("menteeId") REFERENCES "MenteeProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollabSubmission" ADD CONSTRAINT "CollabSubmission_collabId_fkey" FOREIGN KEY ("collabId") REFERENCES "Collab"("id") ON DELETE CASCADE ON UPDATE CASCADE;
