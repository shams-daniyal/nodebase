import { PrismaClient } from "@/generated/prisma"

// a official hack to use prisma with hot reload (so every time its hot reloaded it doesnt decrease the development speed)  so no new prisma instances are createdon every reload (only for development mode)
 
const globalForPrisma = global as unknown as {
    prisma : PrismaClient;
};

const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}

export default prisma;

// This is a direct method use prisma but every time hot reloaded it decrease the speed of the prisma
// const prisma =  new PrismaClient();
