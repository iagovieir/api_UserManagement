/*
  Warnings:

  - You are about to drop the column `nomenclatureOffice_ID` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `secretary_ID` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `sector_ID` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `sex_ID` on the `Users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Users` DROP FOREIGN KEY `Users_nomenclatureOffice_ID_fkey`;

-- DropForeignKey
ALTER TABLE `Users` DROP FOREIGN KEY `Users_secretary_ID_fkey`;

-- DropForeignKey
ALTER TABLE `Users` DROP FOREIGN KEY `Users_sector_ID_fkey`;

-- DropForeignKey
ALTER TABLE `Users` DROP FOREIGN KEY `Users_sex_ID_fkey`;

-- AlterTable
ALTER TABLE `Users` DROP COLUMN `nomenclatureOffice_ID`,
    DROP COLUMN `secretary_ID`,
    DROP COLUMN `sector_ID`,
    DROP COLUMN `sex_ID`,
    ADD COLUMN `nomenclatureOfficeID` INTEGER NULL,
    ADD COLUMN `secretaryID` INTEGER NULL,
    ADD COLUMN `sectorID` INTEGER NULL,
    ADD COLUMN `sexID` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_sexID_fkey` FOREIGN KEY (`sexID`) REFERENCES `Sex`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_secretaryID_fkey` FOREIGN KEY (`secretaryID`) REFERENCES `Secretary`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_sectorID_fkey` FOREIGN KEY (`sectorID`) REFERENCES `Sector`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_nomenclatureOfficeID_fkey` FOREIGN KEY (`nomenclatureOfficeID`) REFERENCES `NomenclatureOffice`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
