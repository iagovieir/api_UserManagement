-- AlterTable
ALTER TABLE `Users` ADD COLUMN `date_of_birth` DATE NULL,
    ADD COLUMN `secretary_ID` INTEGER NULL,
    ADD COLUMN `sector_ID` INTEGER NULL,
    ADD COLUMN `sex` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Sector` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Sector_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Secretary` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Secretary_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_secretary_ID_fkey` FOREIGN KEY (`secretary_ID`) REFERENCES `Secretary`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_sector_ID_fkey` FOREIGN KEY (`sector_ID`) REFERENCES `Sector`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
