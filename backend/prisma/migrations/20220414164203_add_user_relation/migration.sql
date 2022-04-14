/*
  Warnings:

  - You are about to drop the column `type` on the `User` table. All the data in the column will be lost.
  - Added the required column `typeEnum` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "type",
ADD COLUMN     "typeEnum" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Types" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "typeEnum" INTEGER NOT NULL,

    CONSTRAINT "Types_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Types_typeEnum_key" ON "Types"("typeEnum");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_typeEnum_fkey" FOREIGN KEY ("typeEnum") REFERENCES "Types"("typeEnum") ON DELETE RESTRICT ON UPDATE CASCADE;
