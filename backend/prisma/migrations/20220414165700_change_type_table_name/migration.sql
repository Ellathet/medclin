/*
  Warnings:

  - You are about to drop the `Types` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_typeEnum_fkey";

-- DropTable
DROP TABLE "Types";

-- CreateTable
CREATE TABLE "Type" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "typeEnum" INTEGER NOT NULL,

    CONSTRAINT "Type_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Type_typeEnum_key" ON "Type"("typeEnum");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_typeEnum_fkey" FOREIGN KEY ("typeEnum") REFERENCES "Type"("typeEnum") ON DELETE RESTRICT ON UPDATE CASCADE;
