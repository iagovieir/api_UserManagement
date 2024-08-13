/*
  Warnings:

  - You are about to drop the column `typeJob_ID` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the `NomenclatureJob` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TypeJob` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Users` DROP FOREIGN KEY `Users_jobNomenclature_ID_fkey`;

-- DropForeignKey
ALTER TABLE `Users` DROP FOREIGN KEY `Users_typeJob_ID_fkey`;

-- AlterTable
ALTER TABLE `Users` DROP COLUMN `typeJob_ID`;

-- DropTable
DROP TABLE `NomenclatureJob`;

-- DropTable
DROP TABLE `TypeJob`;

-- CreateTable
CREATE TABLE `TypeOffice` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `TypeOffice_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NomenclatureOffice` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `typeJob_ID` INTEGER NULL,

    UNIQUE INDEX `NomenclatureOffice_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `NomenclatureOffice` ADD CONSTRAINT `NomenclatureOffice_typeJob_ID_fkey` FOREIGN KEY (`typeJob_ID`) REFERENCES `TypeOffice`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_jobNomenclature_ID_fkey` FOREIGN KEY (`jobNomenclature_ID`) REFERENCES `NomenclatureOffice`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
