/*
  Warnings:

  - You are about to drop the column `roleID` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the `Role` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Users` DROP FOREIGN KEY `Users_roleID_fkey`;

-- AlterTable
ALTER TABLE `Users` DROP COLUMN `roleID`,
    ADD COLUMN `role` ENUM('ADMIN', 'USER') NOT NULL DEFAULT 'USER';

-- DropTable
DROP TABLE `Role`;
