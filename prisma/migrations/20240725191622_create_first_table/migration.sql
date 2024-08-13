-- CreateTable
CREATE TABLE `TypeJob` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `TypeJob_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NomenclatureJob` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Users` (
    `CPF` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `jobNomenclature_ID` INTEGER NOT NULL,
    `typeJob_ID` INTEGER NOT NULL,

    PRIMARY KEY (`CPF`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_jobNomenclature_ID_fkey` FOREIGN KEY (`jobNomenclature_ID`) REFERENCES `NomenclatureJob`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_typeJob_ID_fkey` FOREIGN KEY (`typeJob_ID`) REFERENCES `TypeJob`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
