/*
  Warnings:

  - Made the column `corporate_email` on table `Users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `matriculation` on table `Users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `personal_email` on table `Users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Users` MODIFY `corporate_email` VARCHAR(191) NOT NULL,
    MODIFY `matriculation` VARCHAR(191) NOT NULL,
    MODIFY `personal_email` VARCHAR(191) NOT NULL;
