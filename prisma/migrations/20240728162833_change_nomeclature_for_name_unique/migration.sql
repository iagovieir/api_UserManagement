/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `NomenclatureJob` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `NomenclatureJob_name_key` ON `NomenclatureJob`(`name`);
