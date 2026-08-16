export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 p-4 mt-auto">
      <div className="max-w-5xl mx-auto text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} ValueTrustAI. All rights reserved.
      </div>
    </footer>
  );
}
