/*
  Warnings:

  - You are about to drop the column `city` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `Users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Users" DROP COLUMN "city",
DROP COLUMN "country";

-- CreateTable
CREATE TABLE "public"."Addresses" (
    "id" SERIAL NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "pincode" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Addresses_pkey" PRIMARY KEY ("id")
);
