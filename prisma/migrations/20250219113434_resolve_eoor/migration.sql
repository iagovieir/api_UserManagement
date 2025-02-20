/*
  Warnings:

  - You are about to drop the column `sexID` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the `Sex` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Users` DROP FOREIGN KEY `Users_sexID_fkey`;

-- AlterTable
ALTER TABLE `Users` DROP COLUMN `sexID`;

-- DropTable
DROP TABLE `Sex`;
