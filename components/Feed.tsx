
import Link from 'next/link'
import BlogCard from './BlogCard'
import CategoryCard from './CategoryCard'
import { prisma } from '@/lib/prisma'

const Feed = async() => {
  const categories = await prisma.category.findMany({
    take:3,
    include:{
      posts: {
        take: 3,
        orderBy:{createdAt: "desc"},
        include:{category:true},
      }
    }
  })

  const recentPosts = await prisma.post.findMany({
    take: 3,
    orderBy:{createdAt: "desc"},
  })
  return (
    <main>
        {/* Featured Categories */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Explore Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories?.map((cat)=>(
           < CategoryCard
            key={cat.id}
            title={cat.name}
            image="/images/food.jpg" //temporary image
            slug={cat.slug}
           />
          ))}
          <Link href="/dashboard" className="bg-blue-500 text-white px-4 py-2 rounded">Show all categories →</Link>
        </div>
      </section>

      {/* LATEST BLOGS */}
      <section className="px-6 py-16 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Latest Blogs
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentPosts.map((post)=>(
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Feed