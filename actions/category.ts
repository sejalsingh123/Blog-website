'use server';

import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { headers } from "next/headers";
import slugify from "slugify"

export async function createCategory(formData: FormData) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    const user = session?.user;
    
    if(!user || (user as any).role !== 'ADMIN'){
        throw new Error("Unauthorized")
    }

    const name = formData.get("name") as string;

    // Here we interact with our database to create a new category
    // using Prisma:
  
    await prisma.category.create({
        data: {
            name,
            userId: user.id,
            slug: slugify(name, {lower: true}),
        },
    });
    

}