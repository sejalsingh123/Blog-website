import prisma from '@/lib/prisma'
import Link from 'next/link'
import DeletePostButton from '@/components/DeleteButton'
import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import { auth } from '@/lib/auth'


const ManagePosts = async() => {
  // Redirect to home if not admin
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  
  if(!user || (user as any).role !== 'ADMIN'){
    redirect("/")
  }
    

  const posts = await prisma.post.findMany({
    orderBy:{ createdAt: 'desc',},
    include: {
      category:true,
    },
  })
  return (
    <main className="min-h-screen mt-20">
      <div className="max-w-7xl mx-auto px-10 py-24">

        {/* Header */}
        <div className="flex items-center justify-between mb-14">
          <div>
            <h1 className="text-5xl font-serif font-semibold text-gray-900 mb-2">
              All Blog Posts
            </h1>
            <p className="text-gray-500 text-lg">
              Manage and publish your blog content
            </p>
          </div>

          <Link
            href="/admin/posts/create"
            className="
              inline-flex items-center gap-2
              bg-neutral-900 text-[#f5e6d3] 
              px-6 py-3 rounded-xl text-lg
              hover:bg-neutral-700 transition
              shadow-lg
            "
          >
            + Create blog post
          </Link>
        </div>

        {/* Empty State */}
        {posts.length === 0 ? (
          <div className="bg-white rounded-3xl p-16 shadow-lg text-center">
            <p className="text-gray-500 text-lg">
              No posts found.
            </p>
          </div>
        ) : (
          /* Table Card */
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-8 py-5 text-left text-sm font-semibold text-gray-600 uppercase">
                    Title
                  </th>
                  <th className="px-8 py-5 text-left text-sm font-semibold text-gray-600 uppercase">
                    Category
                  </th>
                  <th className="px-8 py-5 text-left text-sm font-semibold text-gray-600 uppercase">
                    Created
                  </th>
                  <th className="px-8 py-5 text-right text-sm font-semibold text-gray-600 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {posts.map((post) => (
                  <tr
                    key={post.id}
                    className="
                      border-b last:border-none
                      hover:bg-gray-50 transition
                    "
                  >
                    <td className="px-8 py-6 font-medium text-gray-900">
                      {post.title}
                    </td>

                    <td className="px-8 py-6">
                      <span className="
                        inline-block px-4 py-1 rounded-full
                        text-sm bg-gray-100 text-gray-700
                      ">
                        {post.category.name}
                      </span>
                    </td>

                    <td className="px-8 py-6 text-gray-500">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </td>

                    <td className="px-8 py-6 text-right space-x-6">
                      <Link
                        href={`/admin/posts/edit/${post.id}`}
                        className="
                          text-neutral-800 font-medium
                          hover:underline
                        "
                      >
                        Edit
                      </Link>

                      <DeletePostButton postId={post.id} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );


}

export default ManagePosts