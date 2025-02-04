/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Sex` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Sex_name_key` ON `Sex`(`name`);
