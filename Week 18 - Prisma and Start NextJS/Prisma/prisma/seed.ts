import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function createDummyUser() {
  await prisma.users.create({
    data: {
      username: "Kunal Bhalerao",
      email: "kunalbhalerao@gmail.com",
      password: "Pass@123",
      age: 21,
      todos: {
        create: {
          title: "First Todo",
          description: "Todo description",
        },
      },
    },
  });
}
