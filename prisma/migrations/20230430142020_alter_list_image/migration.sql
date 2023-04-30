/*
  Warnings:

  - You are about to drop the column `image` on the `list_image` table. All the data in the column will be lost.
  - Added the required column `size` to the `list_image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `list_image` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "list_image" DROP COLUMN "image",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "name" VARCHAR(200),
ADD COLUMN     "size" INTEGER NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL,
ALTER COLUMN "announcement_id" DROP NOT NULL;
