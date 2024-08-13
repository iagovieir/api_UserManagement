/*
  Warnings:

  - Made the column `user_Id` on table `Phone` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Phone` DROP FOREIGN KEY `Phone_user_Id_fkey`;

-- AlterTable
ALTER TABLE `Phone` MODIFY `user_Id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Phone` ADD CONSTRAINT `Phone_user_Id_fkey` FOREIGN KEY (`user_Id`) REFERENCES `Users`(`CPF`) ON DELETE RESTRICT ON UPDATE CASCADE;
