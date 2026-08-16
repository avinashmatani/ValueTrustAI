import Link from "next/link";

export default function BlogIndexPage() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Latest insights and updates from ValueTrustAI.
      </p>
      <ul className="space-y-3">
        <li>
          <Link
            href="/blog/welcome-to-valuetrustai"
            className="text-blue-600 hover:underline dark:text-blue-400 font-medium"
          >
            Welcome to ValueTrustAI
          </Link>
        </li>
      </ul>
    </div>
  );
}
