
import {prisma} from '@/lib/prisma'
import BlogCard from '@/components/BlogCard'

type Props = {
  params:{
    category:string
  }
}

const CategoryPage = async({params}:Props) => {
  const {category} = params

  // fetch posts based on category
  const posts = await prisma.post.findMany({
    where:{
      category:{
        name: category,
      },
    },
    include:{
      category:true,
    },
    orderBy:{
      createdAt: 'desc',
    }
  })
  return (
    <main className="px-6 py-16 max-w-7xl mx-auto">
      
      {/* Heading */}
      <h1 className="text-4xl font-semibold mb-4 text-center">
        {category} Blogs
      </h1>

      <p className="text-center text-gray-500 mb-12">
        Explore all posts related to {category}
      </p>

      {/* No posts case */}
      {posts.length === 0 && (
        <p className="text-center text-gray-500">
          No posts found in this category.
        </p>
      )}

      {/* Posts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  )
}

export default CategoryPage