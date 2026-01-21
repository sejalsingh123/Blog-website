import { auth } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { createCategory } from "@/actions/category";
import { redirect } from "next/navigation";
import { headers } from "next/headers";


const CategoryAdminPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  
  if(!user || (user as any).role !== 'ADMIN'){
    redirect("/")
  }

  const categories = await prisma.category.findMany()
  return (
    <main className="min-h-screen mt-20">
      <div className="max-w-6xl mx-auto px-10 py-28">

        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-serif font-semibold text-gray-900 mb-2">
            Manage Categories
          </h1>
          <p className="text-gray-500 text-lg">
            Create and manage blog categories
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Create Category */}
          <div className="bg-white rounded-3xl p-10 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">
              Create Category
            </h2>

            <form action={createCategory} className="space-y-6">
              <input
                name="name"
                placeholder="Category name"
                required
                className="
                  w-full border border-gray-300 rounded-xl 
                  px-5 py-3 text-lg
                  focus:outline-none focus:ring-2 focus:ring-[#4f5d4f]
                "
              />
              <input
                name="imageUrl"
                placeholder="Category image URL"
                required
                className="
                  w-full border border-gray-300 rounded-xl 
                  px-5 py-3 text-lg
                  focus:outline-none focus:ring-2 focus:ring-[#4f5d4f]
                "
              />

              <button
                type="submit"
                className="
                  bg-[#4f5d4f] text-white 
                  px-8 py-3 rounded-xl text-lg
                  hover:bg-[#3e4a3e] transition
                "
              >
                Create Category
              </button>
            </form>
          </div>

          {/* Categories List */}
          <div className="bg-white rounded-3xl p-10 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">
              Existing Categories
            </h2>

            <ul className="space-y-4">
              {categories.map((cat) => (
                <li
                  key={cat.id}
                  className="
                    flex items-center justify-between
                    border border-gray-200 rounded-xl
                    px-6 py-4
                  "
                >
                  <span className="text-lg text-gray-800">
                    {cat.name}
                  </span>

                  {/* future actions */}
                  <span className="text-sm text-gray-400">
                    Active
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </main>
  );

}

export default  CategoryAdminPage