
import { auth } from '@/lib/auth';
import { headers } from "next/headers";
import { redirect } from 'next/navigation'
import prisma from '@/lib/prisma'
import CategoryCard from '@/components/CategoryCard';

const Dashboard = async() => {
  
  // Redirect to sign-in if not authenticated
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  
  if(!user ){
    redirect("/sign-in")
  }
  
  // fetch all categories
  const categories = await prisma.category.findMany({
    orderBy:{createdAt:"desc"}
  })
   return (
    <main className="min-h-screen">
      <div className="max-w-7xl mx-auto px-10 py-24">
        {/* Page Heading */}
        <div className="text-center mt-20 mb-20">
          <h1 className="text-5xl font-serif font-semibold text-gray-900 mb-4">
            All Categories
          </h1>

          <p className="text-lg text-gray-500">
            Explore blogs by category
          </p>
        </div>
        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.name}
              slug={category.slug!}
              image="/images/travel.jpg"
            />
          ))}
        </div>
      </div>
    </main>

  );
}

export default Dashboard