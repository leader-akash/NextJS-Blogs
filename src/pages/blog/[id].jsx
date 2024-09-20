import { useRouter } from 'next/router';
import Head from 'next/head';
import { blogsData } from '@/data/blogData';

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query;

  const blog = blogsData?.find((post) =>{
    console.log('post',post.id)
    return post?.id === id;
  });

console.log('blog', blog)
  if (!blog) {
    return <p>Loading...</p>; 
  }

  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.description} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.description} />
        <meta name="author" content={blog.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

      </Head>

      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <p className="text-gray-600">By {blog.author}</p>
        <div className="mt-6 text-xl leading-relaxed">{blog.content}</div>
      </div>
    </>
  );
};

export default BlogPost;
