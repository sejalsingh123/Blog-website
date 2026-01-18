

import { prisma } from '@/lib/prisma'
import { PostForm } from '@/components/post-form'

const CreatePostPage = async() => {
  const categories = await prisma?.category.findMany()
  return(
    <PostForm categories={categories} />
  )
}

export default CreatePostPage