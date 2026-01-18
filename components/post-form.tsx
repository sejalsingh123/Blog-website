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
    <form action={createPost}>
      <input 
        name="title"
        placeholder="Post Title"
        className="border p-2 rounded w-full mb-4"
        required
      />
      <input 
        name="imageUrl"
        placeholder="Image URL"
        className="border p-2 rounded w-full mb-4"
        required
      />
      <select name="categoryId">
        {categories?.map((cat)=>(
          <option key={cat.id} value={cat.id}>{cat.name}</option>
        ))}
      </select>
      <input
        name="tags"
        placeholder="Tags (comma separated)"
        className="border p-2 rounded w-full mb-4"
      />
      <textarea
        name="content"
        placeholder="Post Content"
        rows={10}
        className="border p-2 rounded w-full mb-4"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"  
      >
        Publish
      </button>
    </form>
  );
}
