-- CreateTable
CREATE TABLE `Phone` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `phone` VARCHAR(191) NOT NULL,
    `user_Id` VARCHAR(191) NULL,

    UNIQUE INDEX `Phone_phone_key`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Phone` ADD CONSTRAINT `Phone_user_Id_fkey` FOREIGN KEY (`user_Id`) REFERENCES `Users`(`CPF`) ON DELETE SET NULL ON UPDATE CASCADE;
