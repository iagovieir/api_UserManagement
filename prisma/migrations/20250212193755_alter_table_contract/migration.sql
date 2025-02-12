/*
  Warnings:

  - The primary key for the `Contracts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Contracts` table. All the data in the column will be lost.
  - The primary key for the `UserContratc` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `projectId` on the `UserContratc` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `UserContratc` table. All the data in the column will be lost.
  - Added the required column `numberContract` to the `Contracts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contractID` to the `UserContratc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userID` to the `UserContratc` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `UserContratc` DROP FOREIGN KEY `UserContratc_projectId_fkey`;

-- DropForeignKey
ALTER TABLE `UserContratc` DROP FOREIGN KEY `UserContratc_userId_fkey`;

-- AlterTable
ALTER TABLE `Contracts` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `numberContract` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`numberContract`);

-- AlterTable
ALTER TABLE `UserContratc` DROP PRIMARY KEY,
    DROP COLUMN `projectId`,
    DROP COLUMN `userId`,
    ADD COLUMN `contractID` VARCHAR(191) NOT NULL,
    ADD COLUMN `userID` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`userID`, `contractID`);

-- AddForeignKey
ALTER TABLE `UserContratc` ADD CONSTRAINT `UserContratc_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `Users`(`CPF`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserContratc` ADD CONSTRAINT `UserContratc_contractID_fkey` FOREIGN KEY (`contractID`) REFERENCES `Contracts`(`numberContract`) ON DELETE RESTRICT ON UPDATE CASCADE;
