import Image from "next/image";
import localFont from "next/font/local";
import Head from "next/head";
import BlogCard from "@/components/BlogCard";
import { blogsData } from "@/data/blogData";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>TWS | Blogs</title>
        <meta
          name="description"
          content="Explore blogs on various topics"
        />
        <meta property="og:title" content="TWS Blogs" />
        <meta
          property="og:description"
          content="Explore blogs with TWS using Next.js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      
      <div className="flex flex-col justify-center  p-10 ">
        <h1 className="text-4xl font-bold mb-6 text-center m-10">TWS Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mx-auto">
          {blogsData.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
}
