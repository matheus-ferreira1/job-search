-- CreateEnum
CREATE TYPE "JobStatus" AS ENUM ('PENDING', 'INTERVIEW', 'APPROVED', 'DECLINED');

-- CreateEnum
CREATE TYPE "JobType" AS ENUM ('FULL_TIME', 'PART_TIME', 'INTERNSHIP', 'CONTRACT', 'TEMPORARY');

-- CreateEnum
CREATE TYPE "JobLocation" AS ENUM ('REMOTE', 'ONSITE', 'HYBRID');

-- CreateTable
CREATE TABLE "Job" (
    "id" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "jobLocation" "JobLocation" NOT NULL DEFAULT 'REMOTE',
    "jobType" "JobType" NOT NULL DEFAULT 'FULL_TIME',
    "jobStatus" "JobStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);
