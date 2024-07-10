/*
  Warnings:

  - Changed the type of `jobLocation` on the `Job` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "JobLocationType" AS ENUM ('REMOTE', 'ONSITE', 'HYBRID');

-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "jobLocationType" "JobLocationType" NOT NULL DEFAULT 'REMOTE',
DROP COLUMN "jobLocation",
ADD COLUMN     "jobLocation" TEXT NOT NULL;

-- DropEnum
DROP TYPE "JobLocation";
