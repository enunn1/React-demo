import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, GitFork, Star } from "lucide-react";
import { featuredByRepo } from "@/data/projects";
import { getRepoDetails, getRepoList } from "@/lib/github";

export async function generateStaticParams() {
  const repos = await getRepoList();
  return repos.map((repo: any) => ({ repo: repo.name }));
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs
                     border-neutral-200 text-neutral-700 bg-white
                     dark:border-neutral-800 dark:text-neutral-200 dark:bg-neutral-900">
      {children}
    </span>
  );
}

export default async function ProjectPage({ params }: { params: { repo: string } }) {
  const { repo } = await params;
  
  let repoDetails: any = null;
  let error: string | null = null;

  try {
    repoDetails = await getRepoDetails(repo);
  } catch {
    error = `Failed to fetch repository: ${repo}`;
  }

  if (error || !repoDetails) {
    return (
      <main className="max-w-3xl mx-auto py-12 px-6 text-center">
        <h1 className="text-3xl font-semibold mb-4 text-red-500">
          Error Loading Repository
        </h1>
        <p className="text-gray-400">{error}</p>
        <Link href="/portfolio" className="text-blue-500 hover:underline mt-6 block">
          ← Back to Portfolio
        </Link>
      </main>
    );
  }

  const featured = featuredByRepo[repo];

  return (
    <main className="max-w-3xl mx-auto py-12 px-6">
      <Link href="/portfolio" className="text-blue-500 hover:underline text-sm">
        <ArrowLeft className="inline" /> Back to Portfolio
      </Link>

      {/* Title/summary: curated if featured, else GitHub */}
      <h1 className="text-4xl font-bold mt-4 mb-2">
        {featured?.title ?? repoDetails.name}
      </h1>
      <p className="text-neutral-600 dark:text-neutral-400 mb-6">
        {featured?.summary ?? repoDetails.description ?? "No description provided."}
      </p>

      {/* Featured-only content */}
      {featured && (
        <>
          <div className="flex flex-wrap gap-2 mb-6">
            {featured.status && <Badge>{featured.status}</Badge>}
            {featured.tech.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Highlights</h2>
            <ul className="list-disc pl-5 space-y-2 reveal">
              {featured.highlights.map((h) => (
                <li key={h} className="text-neutral-700 dark:text-neutral-300">
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {/* Links section */}
      <div className="flex flex-wrap gap-2 mb-6">
        {featured && (
          <>
             {featured.links.live && (
              <Link
                href={featured.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Live Demo <ArrowRight className="inline" />
              </Link>
            )}

            {featured.links.github && (
              <Link
                href={featured.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View on GitHub <ArrowRight className="inline" />
              </Link>
            )}

            {featured.links.frontend && (
              <Link
                href={featured.links.frontend}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Frontend Repo on GitHub <ArrowRight className="inline" />
              </Link>
            )}

            {featured.links.backend && (
              <Link
                href={featured.links.backend}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Backend Repo on Github<ArrowRight className="inline" />
              </Link>
            )}
          </>
        )}
        {!featured && (
          <>
          <Link
            href={repoDetails.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View on GitHub <ArrowRight className="inline" />
          </Link>
          </>
        )}
      </div>

      {/* GitHub stats */}
      <div className="rounded-xl border p-5
                      border-neutral-700 bg-white
                      dark:border-neutral-500 dark:bg-neutral-950">
        <h2 className="text-lg font-semibold mb-4">Repo stats</h2>

        <div className="flex flex-wrap gap-4 text-sm">
          <span className="text-neutral-700 dark:text-neutral-300">
            <Star className="inline" /> {repoDetails.stargazers_count}
          </span>
          <span className="text-neutral-700 dark:text-neutral-300">
            <GitFork className="inline" /> {repoDetails.forks_count}
          </span>
          <span className="text-neutral-700 dark:text-neutral-300">
            <Clock className="inline" /> Updated{" "}
            {new Date(repoDetails.updated_at).toLocaleDateString()}
          </span>
          {repoDetails.language && (
            <span className="text-neutral-700 dark:text-neutral-300">
              <strong>Primary:</strong> {repoDetails.language}
            </span>
          )}
        </div>
      </div>
    </main>
  );
}
