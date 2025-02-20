/*
  Warnings:

  - You are about to drop the column `role` on the `Users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Users` DROP COLUMN `role`;

-- CreateTable
CREATE TABLE `UserRoleOnUsers` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `role` ENUM('ADMIN', 'USER', 'MODERATOR', 'VIEWER') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserRoleOnUsers` ADD CONSTRAINT `UserRoleOnUsers_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`CPF`) ON DELETE CASCADE ON UPDATE CASCADE;
