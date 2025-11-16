import { getRepoDetails, getRepoList } from '@/lib/github';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Clock, GitFork, Star } from 'lucide-react';

export async function generateStaticParams() {
  const repos = await getRepoList();
  return repos.map((repo: any) => ({ repo: repo.name }));
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

   if (error) {
    return (
      <main className="max-w-3xl mx-auto py-12 px-6 text-center">
        <h1 className="text-3xl font-semibold mb-4 text-red-500">Error Loading Repository</h1>
        <p className="text-gray-400">{error}</p>
        <Link href="/portfolio" className="text-blue-500 hover:underline mt-6 block">
          ← Back to Portfolio
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto py-12 px-6">
      <Link href="/portfolio" className="text-blue-500 hover:underline text-sm">
        <ArrowLeft className="inline"/> Back to Portfolio
      </Link>

      <h1 className="text-4xl font-bold mt-4 mb-2">{repoDetails.name}</h1>
      <p className="text-gray-400 mb-6">{repoDetails.description || 'No description provided.'}</p>

      <div className="flex flex-wrap gap-4 text-sm mb-8">
        <p>
          <span><Star className="inline"/> {repoDetails.stargazers_count}</span>&emsp; 
          <span><GitFork className="inline"/> {repoDetails.forks_count}</span>&emsp; 
          <span><Clock className="inline"/> Updated {new Date(repoDetails.updated_at).toLocaleDateString()}</span>
        </p>
       
      </div>

      <div className="flex flex-wrap gap-4 text-sm mb-8">
        {repoDetails.language && (
        <p>
          <strong>Primary Language:</strong> {repoDetails.language}
        </p>
      )}
      </div>

      <div className="flex flex-wrap gap-4 text-sm mb-8">
         <p>
          <Link
            href={repoDetails.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View on GitHub <ArrowRight className="inline"/>
          </Link>
        </p>
      </div>


      {/* Optional: If you add local notes or screenshots later */}
      {/* <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">Project Notes</h2>
        <p className="text-gray-400">Add custom content here...</p>
      </section> */}
    </main>
  );
}
