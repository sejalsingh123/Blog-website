
import { auth } from '@/lib/auth';
import { headers } from "next/headers";
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import CategoryCard from '@/components/CategoryCard';

const Dashboard = async() => {
  
  // Redirect to sign-in if not authenticated
   const session = await auth.api.getSession({
      headers: await headers(),
    });
    const user = session?.user;
    
    if(!user || (user as any).role !== 'ADMIN'){
      redirect("/sign-in")
    }
  
  // fetch all categories
  const categories = await prisma.category.findMany({
    orderBy:{createdAt:"desc"}
  })
   return (
    <main className="px-6 py-16 max-w-7xl mx-auto">
      
      {/* Page Heading */}
      <h1 className="text-4xl font-semibold mb-4 text-center">
        All Categories
      </h1>

      <p className="text-center text-gray-500 mb-12">
        Explore blogs by category
      </p>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.name}
            slug={category.name}
            image="/images/travel.jpg"
          />
        ))}
      </div>
    </main>
  );
}

export default Dashboard