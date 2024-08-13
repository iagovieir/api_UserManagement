/*
  Warnings:

  - You are about to drop the column `typeJob_ID` on the `NomenclatureOffice` table. All the data in the column will be lost.
  - You are about to drop the column `jobNomenclature_ID` on the `Users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `NomenclatureOffice` DROP FOREIGN KEY `NomenclatureOffice_typeJob_ID_fkey`;

-- DropForeignKey
ALTER TABLE `Users` DROP FOREIGN KEY `Users_jobNomenclature_ID_fkey`;

-- AlterTable
ALTER TABLE `NomenclatureOffice` DROP COLUMN `typeJob_ID`,
    ADD COLUMN `typeOffice_ID` INTEGER NULL;

-- AlterTable
ALTER TABLE `Users` DROP COLUMN `jobNomenclature_ID`,
    ADD COLUMN `nomenclatureOffice_ID` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `NomenclatureOffice` ADD CONSTRAINT `NomenclatureOffice_typeOffice_ID_fkey` FOREIGN KEY (`typeOffice_ID`) REFERENCES `TypeOffice`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_nomenclatureOffice_ID_fkey` FOREIGN KEY (`nomenclatureOffice_ID`) REFERENCES `NomenclatureOffice`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
