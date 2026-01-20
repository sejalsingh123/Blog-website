
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import Link from 'next/link'
import { redirect} from 'next/navigation'


const AdminDashboard = async () => {
  
  // Redirect to home if not admin
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  
  if(!user || (user as any).role !== 'ADMIN'){
    redirect("/")
  }
    
  return (
    <main className="min-h-screen ">
      <div className="max-w-6xl mx-auto px-10 py-28 mt-20">

        {/* Header */}
        <div className="text-center mb-24">
          <h1 className="text-5xl font-serif font-semibold text-gray-900 mb-4">
            Admin Dashboard
          </h1>
          <p className="text-lg text-gray-500">
            Logged in as <span className="font-medium">{user.email}</span>
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Categories Card */}
          <Link
            href="/admin/categories"
            className="group relative bg-white rounded-3xl p-10 shadow-lg 
                      hover:shadow-2xl transition-all duration-500
                      hover:-translate-y-2"
          >
            {/* Accent bar */}
            <div className="absolute top-0 left-0 h-full w-2 bg-[#4f5d4f] rounded-l-3xl" />

            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Manage Categories
            </h2>

            <p className="text-gray-500 text-lg mb-10">
              Create, edit and organize blog categories.
            </p>

            <span className="inline-block text-[#4f5d4f] font-medium text-lg group-hover:underline">
              Go to Categories →
            </span>
          </Link>

          {/* Posts Card */}
          <Link
            href="/admin/posts"
            className="group relative bg-white rounded-3xl p-10 shadow-lg 
                      hover:shadow-2xl transition-all duration-500
                      hover:-translate-y-2"
          >
            {/* Accent bar */}
            <div className="absolute top-0 left-0 h-full w-2 bg-[#a6774a] rounded-l-3xl" />

            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Manage Posts
            </h2>

            <p className="text-gray-500 text-lg mb-10">
              Create, edit and publish blog posts.
            </p>

            <span className="inline-block text-[#a6774a] font-medium text-lg group-hover:underline">
              Go to Posts →
            </span>
          </Link>

        </div>
      </div>
    </main>

  )
}

export default AdminDashboard