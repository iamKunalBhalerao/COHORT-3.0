import { PrismaClient } from "@prisma/client";

//@ts-expect-error type error
const prisma = globalThis.prisma ?? new PrismaClient();

//@ts-expect-error type error
if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;

export default prisma;
