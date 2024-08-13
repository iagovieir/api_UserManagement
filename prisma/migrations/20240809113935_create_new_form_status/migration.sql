/*
  Warnings:

  - You are about to drop the column `status` on the `Users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Users` DROP COLUMN `status`,
    ADD COLUMN `statusID` INTEGER NULL;

-- CreateTable
CREATE TABLE `Status` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Status_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_statusID_fkey` FOREIGN KEY (`statusID`) REFERENCES `Status`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
