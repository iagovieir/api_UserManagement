-- AlterTable
ALTER TABLE `Users` ADD COLUMN `sexID` INTEGER NULL;

-- CreateTable
CREATE TABLE `Sex` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Sex_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_sexID_fkey` FOREIGN KEY (`sexID`) REFERENCES `Sex`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
