/*
  Warnings:

  - You are about to drop the column `approved` on the `Certificate` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Certificate" DROP COLUMN "approved",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'PENDING';
