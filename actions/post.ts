"use server"
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { prisma } from "@/lib/prisma";
import slugify from "slugify"


export async function createPost(formData: FormData) {
    const session = await auth.api.getSession({
            headers: await headers(),
        });
        const user = session?.user;
        
        if(!user || (user as any).role !== 'ADMIN'){
            throw new Error("Unauthorized")
        }  

    const title = formData.get("title") as string

    await prisma.post.create({
        data: {
            title,
            slug: slugify(title, {lower: true}),
            content: formData.get("content") as string,
            imageUrl: formData.get("imageUrl") as string,
            tags: (formData.get("tags") as string).split(",").map(tag => tag.trim()),
            categoryId:formData.get("categoryId") as string,
            userId: user.id,
        },
    })

}