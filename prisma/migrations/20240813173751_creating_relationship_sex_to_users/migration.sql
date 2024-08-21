/*
  Warnings:

  - You are about to drop the column `sex` on the `Users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Users` DROP COLUMN `sex`,
    ADD COLUMN `sex_ID` INTEGER NULL;

-- CreateTable
CREATE TABLE `Sex` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_sex_ID_fkey` FOREIGN KEY (`sex_ID`) REFERENCES `Sex`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
