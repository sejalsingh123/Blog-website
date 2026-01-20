import Link from "next/link";

const BlogCard = ({ post }: { post: any }) => {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
      
      {/* Image */}
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-48 object-cover rounded-lg"
      />

      {/* Title */}
      <h3 className="mt-4 text-xl font-semibold">
        {post.title}
      </h3>

      {/* Read more */}
      <Link
        href={`/blogs/post/${post.slug}`}
        className="inline-block mt-3 text-neutral-800 font-medium hover:underline"
      >
        Read more →
      </Link>
    </div>
  );
};

export default BlogCard;
