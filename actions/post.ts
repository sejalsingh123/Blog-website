"use server"
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import {prisma} from "@/lib/prisma";
import slugify from "slugify"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


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

export async function deletePost(postId: string){
    if(!postId){
        throw new Error("Post ID is required")
    }

    await prisma.post.delete({
        where: { id: postId }
    })
    
    revalidatePath('/admin/posts')
    redirect('/admin/posts')
}

export async function updatePost(formData:FormData){
    const id = formData.get("id") as string
    const title = formData.get("title") as string
    const content = formData.get("content") as string
    const categoryId = formData.get("categoryId") as string
    const tagsRaw = formData.get("tags") as string

    const tags = tagsRaw ? tagsRaw.split(",").map(tag => tag.trim()) : []

    await prisma.post.update({
        where:{id},
        data:{
            title,
            content,
            categoryId,
            tags,
        }
    })
    revalidatePath('/admin/posts')
    redirect('/admin/posts')
}