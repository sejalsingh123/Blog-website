import { PrismaClient } from '@/app/generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

declare global {
  var prisma: PrismaClient | undefined;
}

const connectionString = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString,
});

const adapter = new PrismaPg(pool);

const prisma = global.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}
export default prisma;


// This file creates a Prisma Client and attaches it to the global object so that only one instance of the client is created in your application. 
// This helps resolve issues with hot reloading that can occur when using Prisma ORM with Next.js in development mode.
