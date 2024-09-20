import { blogsData } from "@/data/blogData";
import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }) => {
  console.log("blogData", blogsData);
  return (
    <div className="">
      <Link href={`/blog/${blog.id}`}>
        <div key={blog.id} className="border p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
          <p className="text-gray-600 mb-4">{blog.description}</p>
          Read more
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
