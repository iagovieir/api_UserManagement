-- DropForeignKey
ALTER TABLE `NomenclatureOffice` DROP FOREIGN KEY `NomenclatureOffice_typeOffice_ID_fkey`;

-- AlterTable
ALTER TABLE `Users` ADD COLUMN `status` VARCHAR(191) NULL DEFAULT 'Ativo';

-- AddForeignKey
ALTER TABLE `NomenclatureOffice` ADD CONSTRAINT `NomenclatureOffice_typeOffice_ID_fkey` FOREIGN KEY (`typeOffice_ID`) REFERENCES `TypeOffice`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
