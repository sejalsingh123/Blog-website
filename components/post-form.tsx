'use client';

import { createPost } from '@/actions/post';

interface PostFormProps {
  categories: Array<{
    id: string;
    name: string;
  }>;
}

export function PostForm({ categories }: PostFormProps) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-12">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-serif font-semibold text-gray-900 mb-2">
          Create New Post
        </h1>
        <p className="text-gray-500 text-lg">
          Write and publish a new blog post
        </p>
      </div>

      <form action={createPost} className="space-y-8">

        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Post Title
          </label>
          <input
            name="title"
            placeholder="Enter post title"
            required
            className="
              w-full border border-gray-300 rounded-xl
              px-5 py-3 text-lg
              focus:outline-none focus:ring-2 focus:ring-neutral-700
            "
          />
        </div>

        {/* Image */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Featured Image URL
          </label>
          <input
            name="imageUrl"
            placeholder="https://example.com/image.jpg"
            required
            className="
              w-full border border-gray-300 rounded-xl
              px-5 py-3 text-lg
              focus:outline-none focus:ring-2 focus:ring-neutral-700
            "
          />
        </div>

        {/* Category + Tags */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Category
            </label>
            <select
              name="categoryId"
              className="
                w-full border border-gray-300 rounded-xl
                px-5 py-3 text-lg bg-white
                focus:outline-none focus:ring-2 focus:ring-neutral-700
              "
            >
              {categories?.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Tags
            </label>
            <input
              name="tags"
              placeholder="tech, ai, react"
              className="
                w-full border border-gray-300 rounded-xl
                px-5 py-3 text-lg
                focus:outline-none focus:ring-2 focus:ring-neutral-700
              "
            />
          </div>

        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Content
          </label>
          <textarea
            name="content"
            rows={12}
            placeholder="Write your post content here..."
            required
            className="
              w-full border border-gray-300 rounded-xl
              px-5 py-4 text-lg
              focus:outline-none focus:ring-2 focus:ring-neutral-700
            "
          />
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-6 pt-6 border-t">

          <button
            type="submit"
            className="
              bg-neutral-800 text-[#f5e6d3]
              px-10 py-4 rounded-xl text-lg font-medium
              hover:bg-neutral-700 transition
              shadow-lg
            "
          >
            Publish Post
          </button>

        </div>

      </form>
    </div>
  );
}

