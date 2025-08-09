-- AddForeignKey
ALTER TABLE "public"."Todos" ADD CONSTRAINT "Todos_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
