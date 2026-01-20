'use client'
import { updatePost } from "@/actions/post"
import { useState } from "react"


type Props = {
    post:{
        id: string
        title: string
        content: string
        categoryId: string
        tags: string[]
    }
    categories:{
        id: string
        name: string
    }[]
}

const EditPostForm = ({ post, categories }: Props) => {
    const [title, setTitle] = useState(post.title)
    const [content, setContent] = useState(post.content)
    const [categoryId, setCategoryId] = useState(post.categoryId)
    const [tags, setTags] = useState(post.tags.join(", "))
  return (
    <form
      action={updatePost}
      className="bg-white rounded-3xl shadow-xl p-12 space-y-8"
    >
      {/* hidden post id */}
      <input type="hidden" name="id" value={post.id} />

      {/* Title */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Post Title
        </label>
        <input
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post title"
          required
          className="
            w-full border border-gray-300 rounded-xl
            px-5 py-3 text-lg
            focus:outline-none focus:ring-2 focus:ring-[#2f3b2f]
          "
        />
      </div>

      {/* Category */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Category
        </label>
        <select
          name="categoryId"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          required
          className="
            w-full border border-gray-300 rounded-xl
            px-5 py-3 text-lg bg-white
            focus:outline-none focus:ring-2 focus:ring-[#2f3b2f]
          "
        >
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      {/* Tags */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Tags
        </label>
        <input
          name="tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="tech, ai, travel"
          className="
            w-full border border-gray-300 rounded-xl
            px-5 py-3 text-lg
            focus:outline-none focus:ring-2 focus:ring-[#2f3b2f]
          "
        />
      </div>

      {/* Content */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Content
        </label>
        <textarea
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={14}
          required
          className="
            w-full border border-gray-300 rounded-xl
            px-5 py-4 text-lg
            focus:outline-none focus:ring-2 focus:ring-[#2f3b2f]
          "
        />
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end gap-6 pt-8 border-t">

        <button
          type="submit"
          className="
            bg-[#2f3b2f] text-[#f5e6d3]
            px-10 py-4 rounded-xl text-lg font-medium
            hover:bg-[#243024] transition
            shadow-lg
          "
        >
          Update Post
        </button>

      </div>
    </form>

  )
}

export default EditPostForm