import EditPostForm from "@/components/EditPostForm"
import { auth } from "@/lib/auth"
import prisma from "@/lib/prisma"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

type Props = {
  params: Promise<{ id: string }>
}

const EditPost = async({ params }: Props) => {
  const post = await prisma.post.findUnique({
    where:{
      id: (await params).id,
    },
  })
  if(!post){
    return <div>Post not found</div>
  }

  const categories = await prisma.category.findMany({
    orderBy:{name: 'asc'},
  })

  return (
    <div className="min-h-screen bg-[#faf7ef] mt-20">
      <div className="max-w-4xl mx-auto px-10 py-28">
        <h1 className="text-4xl font-serif font-semibold text-gray-900 mb-10">
          Edit Post
        </h1>
        <EditPostForm post={post} categories={categories}/>
      </div>
    </div>
  )
}

export default EditPost