/*
  Warnings:

  - A unique constraint covering the columns `[personal_email]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[corporate_email]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[matriculation]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `corporate_email` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `matriculation` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `personal_email` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Users` ADD COLUMN `corporate_email` VARCHAR(191) NOT NULL,
    ADD COLUMN `matriculation` VARCHAR(191) NOT NULL,
    ADD COLUMN `personal_email` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Phone` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `phone` VARCHAR(191) NOT NULL,
    `user_Id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Phone_phone_key`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Users_personal_email_key` ON `Users`(`personal_email`);

-- CreateIndex
CREATE UNIQUE INDEX `Users_corporate_email_key` ON `Users`(`corporate_email`);

-- CreateIndex
CREATE UNIQUE INDEX `Users_matriculation_key` ON `Users`(`matriculation`);

-- AddForeignKey
ALTER TABLE `Phone` ADD CONSTRAINT `Phone_user_Id_fkey` FOREIGN KEY (`user_Id`) REFERENCES `Users`(`CPF`) ON DELETE RESTRICT ON UPDATE CASCADE;
