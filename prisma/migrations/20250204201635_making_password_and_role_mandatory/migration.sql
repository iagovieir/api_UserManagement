/*
  Warnings:

  - Made the column `password` on table `Users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `roleID` on table `Users` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Users` DROP FOREIGN KEY `Users_roleID_fkey`;

-- AlterTable
ALTER TABLE `Users` MODIFY `password` VARCHAR(191) NOT NULL,
    MODIFY `roleID` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_roleID_fkey` FOREIGN KEY (`roleID`) REFERENCES `Role`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
