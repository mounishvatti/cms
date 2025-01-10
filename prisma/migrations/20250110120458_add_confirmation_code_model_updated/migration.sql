/*
  Warnings:

  - You are about to drop the column `email` on the `confirmationCode` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[oldemail]` on the table `confirmationCode` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[newemail]` on the table `confirmationCode` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `newemail` to the `confirmationCode` table without a default value. This is not possible if the table is not empty.
  - Added the required column `oldemail` to the `confirmationCode` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "confirmationCode_email_idx";

-- DropIndex
DROP INDEX "confirmationCode_email_key";

-- AlterTable
ALTER TABLE "confirmationCode" DROP COLUMN "email",
ADD COLUMN     "newemail" TEXT NOT NULL,
ADD COLUMN     "oldemail" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "confirmationCode_oldemail_key" ON "confirmationCode"("oldemail");

-- CreateIndex
CREATE UNIQUE INDEX "confirmationCode_newemail_key" ON "confirmationCode"("newemail");

-- CreateIndex
CREATE INDEX "confirmationCode_newemail_idx" ON "confirmationCode"("newemail");
