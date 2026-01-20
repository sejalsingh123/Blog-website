import prisma from '@/lib/prisma'
import { auth } from '@/lib/auth';
import { headers } from "next/headers";
import { redirect } from 'next/navigation'

type Props = {
  params : Promise<{ slug: string }>
}

const PostPage = async({params}:Props) => {
  // Redirect to sign-in if not authenticated
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  
  if(!user ){
    redirect("/sign-in")
  }
  

  const {slug} = await params
  const post = await prisma.post.findUnique({
    where: { slug },
    include:{
      category: true,
    },
  })

  //if post not found
  if(!post){
    return <div className="px-6 py-16 max-w-4xl mx-auto mt-40">Post not found</div>
  }

  return (
    <main className="min-h-screen bg-[#faf7ef] mt-15">
      <div className="max-w-7xl mx-auto px-10 py-28">

        {/* Header */}
        <div className="max-w-3xl mb-16">

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-6">
            <span className="font-medium text-[#2f3b2f] uppercase tracking-wide">
              {post.category.name}
            </span>
            <span>•</span>
            <span>{new Date(post.createdAt).toDateString()}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-10">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="
                  px-4 py-3 rounded-full text-sm
                  bg-[#e6ede6] text-[#2f3b2f]
                  font-medium
                "
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-5xl font-serif font-semibold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Subtitle */}
          {/* <p className="text-xl text-gray-700 leading-relaxed">
            {post.subtitle ?? "Thoughtful insights and practical ideas to help you learn better."}
          </p> */}
        </div>

        {/* Content + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Content */}
          <article
            className="
              lg:col-span-8
              prose prose-lg max-w-none
              prose-headings:font-serif
              prose-headings:text-gray-900
              prose-p:text-gray-700
              prose-a:text-[#2f3b2f]
              prose-a:no-underline hover:prose-a:underline
            "
          >
            {post.content}
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-32 bg-[#a6774a] text-white rounded-3xl p-8">

              <div className="flex justify-center mb-6">
                <img
                  src="/images/profile.jpg"
                  alt="Author"
                  className="w-32 h-32 rounded-full object-cover border-4 border-white"
                />
              </div>

              <h3 className="text-2xl font-serif font-semibold mb-3">
                Hi, thanks for dropping by!
              </h3>

              <p className="text-sm text-[#f5e6d3] leading-relaxed">
                I write about tech, learning, and ideas that help you grow.
                Stick around — there’s more coming.
              </p>
            </div>
          </aside>

        </div>
      </div>
    </main>

  )
}

export default PostPage