/*
  Warnings:

  - You are about to drop the `Todos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Todos" DROP CONSTRAINT "Todos_user_id_fkey";

-- DropTable
DROP TABLE "public"."Todos";

-- CreateTable
CREATE TABLE "public"."Todo" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Todo" ADD CONSTRAINT "Todo_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
