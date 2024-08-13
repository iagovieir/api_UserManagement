-- DropForeignKey
ALTER TABLE `Users` DROP FOREIGN KEY `Users_jobNomenclature_ID_fkey`;

-- DropForeignKey
ALTER TABLE `Users` DROP FOREIGN KEY `Users_typeJob_ID_fkey`;

-- AlterTable
ALTER TABLE `Users` MODIFY `jobNomenclature_ID` INTEGER NULL,
    MODIFY `typeJob_ID` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_jobNomenclature_ID_fkey` FOREIGN KEY (`jobNomenclature_ID`) REFERENCES `NomenclatureJob`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_typeJob_ID_fkey` FOREIGN KEY (`typeJob_ID`) REFERENCES `TypeJob`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
