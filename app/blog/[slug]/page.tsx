interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-4">Blog Post: {slug}</h1>
      <p className="text-gray-600 dark:text-gray-400">
        This is a placeholder post for dynamic route segment &quot;{slug}&quot;.
      </p>
    </div>
  );
}
