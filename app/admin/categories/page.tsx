import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
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
    <div>
      {/* creating a new category */}
      <h1>Manage Categories</h1>
      <form action={createCategory}>
        <input
          name="name"
          placeholder='Category name'
          required
        />
        <button type="submit">Create Category</button>
      </form>
      {/* listing all categories */}
      <ul>
        {categories.map((cat) => (
          <li key={cat.id}>{cat.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default  CategoryAdminPage