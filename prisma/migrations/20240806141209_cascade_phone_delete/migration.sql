-- DropForeignKey
ALTER TABLE `Phone` DROP FOREIGN KEY `Phone_user_Id_fkey`;

-- AddForeignKey
ALTER TABLE `Phone` ADD CONSTRAINT `Phone_user_Id_fkey` FOREIGN KEY (`user_Id`) REFERENCES `Users`(`CPF`) ON DELETE CASCADE ON UPDATE CASCADE;
