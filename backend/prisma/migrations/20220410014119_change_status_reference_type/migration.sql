/*
  Warnings:

  - You are about to drop the column `statusId` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the column `specialtyId` on the `User` table. All the data in the column will be lost.
  - Added the required column `statusEnum` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_statusId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_specialtyId_fkey";

-- AlterTable
ALTER TABLE "Appointment" DROP COLUMN "statusId",
ADD COLUMN     "statusEnum" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "specialtyId";

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_statusEnum_fkey" FOREIGN KEY ("statusEnum") REFERENCES "Status"("statusEnum") ON DELETE RESTRICT ON UPDATE CASCADE;
