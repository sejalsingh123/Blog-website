import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import {prisma} from '@/lib/prisma'

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  user: {
    additionalFields: {
      role: {
        type: 'string',
      },
    },
  },
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 4,
    maxPasswordLength: 20,
  },
  trustedOrigins: ['http://localhost:3001'],
})


