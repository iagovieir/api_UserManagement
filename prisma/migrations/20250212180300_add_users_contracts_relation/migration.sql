-- CreateTable
CREATE TABLE `Contracts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nameObjetc` VARCHAR(191) NOT NULL,
    `startDate` DATETIME(3) NOT NULL,
    `endDate` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserContratc` (
    `userId` VARCHAR(191) NOT NULL,
    `projectId` INTEGER NOT NULL,
    `assignedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`userId`, `projectId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserContratc` ADD CONSTRAINT `UserContratc_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`CPF`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserContratc` ADD CONSTRAINT `UserContratc_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Contracts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
