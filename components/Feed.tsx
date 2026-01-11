import React from 'react'
import BlogCard from './BlogCard'
import CategoryCard from './CategoryCard'

const Feed = () => {
  return (
    <main>
        {/* CATEGORIES */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Explore Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <CategoryCard title='Food Blog' image='/images/food.jpg'/>
          <CategoryCard title='Travel Blog' image='/images/travel.jpg'/>
          <CategoryCard title='Tech Blog' image='/images/tech.jpg'/>
          <CategoryCard title='Lifestyle Blog' image='/images/lifestyle.jpg'/>
          <CategoryCard title='Personal Growth Blog' image='/images/personal.jpg'/>
        </div>
      </section>

      {/* LATEST BLOGS */}
      <section className="px-6 py-16 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Latest Blogs
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </section>
    </main>
  )
}

export default Feed