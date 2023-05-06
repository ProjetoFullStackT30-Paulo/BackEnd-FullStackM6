/*
  Warnings:

  - You are about to alter the column `birthdate` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(50)` to `VarChar(10)`.
  - You are about to alter the column `phone` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(20)` to `VarChar(15)`.

*/
-- AlterTable
ALTER TABLE "adresses" ALTER COLUMN "zip_code" SET DATA TYPE VARCHAR(9);

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "birthdate" SET DATA TYPE VARCHAR(10),
ALTER COLUMN "cpf" SET DATA TYPE VARCHAR(14),
ALTER COLUMN "phone" SET DATA TYPE VARCHAR(15);
