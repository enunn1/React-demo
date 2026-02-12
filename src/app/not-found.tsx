import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 py-20">
      <div className="max-w-xl text-center">
        <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
          404
        </p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Page not found
        </h1>

        <p className="mt-4 text-neutral-600 dark:text-neutral-400">
          The page you’re looking for doesn’t exist, or it may have been moved.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg px-4 py-2 font-medium
                       bg-blue-600 text-white hover:bg-blue-700
                       focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
                       dark:focus:ring-offset-neutral-950"
          >
            Go home
          </Link>

          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-lg px-4 py-2 font-medium
                       border border-neutral-200 text-neutral-900 bg-white hover:bg-neutral-50
                       dark:border-neutral-800 dark:text-white dark:bg-neutral-900 dark:hover:bg-neutral-800
                       focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
                       dark:focus:ring-offset-neutral-950"
          >
            View portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}
