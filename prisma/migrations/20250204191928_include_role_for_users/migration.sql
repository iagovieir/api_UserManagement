-- AlterTable
ALTER TABLE `Users` ADD COLUMN `roleID` INTEGER NULL;

-- CreateTable
CREATE TABLE `Role` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `typeRole` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Role_typeRole_key`(`typeRole`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_roleID_fkey` FOREIGN KEY (`roleID`) REFERENCES `Role`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
