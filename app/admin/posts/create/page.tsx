

import {prisma} from '@/lib/prisma'
import { PostForm } from '@/components/post-form'
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';

const CreatePost = async() => {
  
  // Redirect to home if not admin
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  
  if(!user || (user as any).role !== 'ADMIN'){
    redirect("/")
  }
    

  const categories = await prisma?.category.findMany()
  return(
    <main className="min-h-screen mt-10 p-10 ">
      <div className="max-w-4xl mx-auto px-10 py-28">
        <PostForm categories={categories} />
      </div>
    </main>
  )
}

export default CreatePost