/*
  Warnings:

  - You are about to alter the column `userId` on the `cards` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Integer`.

*/
-- AlterTable
ALTER TABLE "cards" ALTER COLUMN "userId" SET DATA TYPE INTEGER;
