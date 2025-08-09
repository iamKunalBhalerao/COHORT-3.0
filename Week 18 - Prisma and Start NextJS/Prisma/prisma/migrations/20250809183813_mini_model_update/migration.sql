/*
  Warnings:

  - You are about to drop the column `user_id` on the `Todo` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Todo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Todo" DROP CONSTRAINT "Todo_user_id_fkey";

-- AlterTable
ALTER TABLE "public"."Todo" DROP COLUMN "user_id",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Todo" ADD CONSTRAINT "Todo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
