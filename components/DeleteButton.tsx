'use client'
import { deletePost } from "@/actions/post"

type Props ={
    postId: string,
}
const DeletePostButton = ({ postId }: Props) => {
    const handleDelete = async ()=> {
        const confirm = window.confirm("Are you sure you want to delete this post?")
        if(!confirm) return
        await deletePost(postId)
    }
  return (
    <button
      className="text-red-600 hover:underline"
      onClick={handleDelete}
    >Delete</button>
  )
}

export default DeletePostButton