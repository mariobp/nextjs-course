import { useRouter } from 'next/router';

const BlogPostPage = () => {
  const router = useRouter();
  const query = router.query;

  console.log('Router query', query);
  return (
    <div>
      <h1>The Blog Post</h1>
    </div>
  );
}

export default BlogPostPage;