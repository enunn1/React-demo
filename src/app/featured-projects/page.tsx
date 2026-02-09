"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FeaturedProject, featuredProjects } from '@/data/projects';

function RepoList() {
    const [repos, setRepos] = useState<FeaturedProject[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const data = featuredProjects;
                setRepos(data);
            } catch (err) {
                const message = err instanceof Error ? err.message : 'Unknown error';
                setError(message);
            } finally {
                setLoading(false);
            }
        };
        fetchRepos();
    }, []);

    if (loading) return <p className="p-4">Loading...</p>;
    if (error) return <p className="p-4 text-red-600">Error: {error}</p>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {repos.map(repo => (
                <Link 
                    key={repo.repoName} 
                    href={`/portfolio/${repo.repoName}`}
                    className="
                        border p-4 rounded-xl shadow-sm transition
                        bg-white text-black border-neutral-200
                        dark:bg-neutral-900 dark:text-white dark:border-neutral-800
                        hover:shadow-lg hover:-translate-y-0.5
                        hover:border-blue-400/50
                        dark:hover:shadow-[0_10px_30px_rgba(255,255,255,0.06)]"
                >
                    <h2 className="text-xl font-semibold text-left mb-1">{repo.title}</h2>
                    <p className="text-sm mb-2">{repo.summary ?? 'No description provided.'}</p>
                </Link>
            ))}

            <Link href={'/portfolio'}>
                <h2 className="text-xl font-semibold text-left mb-1">More Projects <ArrowRight className="inline" /></h2>
            </Link>
        </div>
    ) ;
}

export default function Page() {
  return  (
  <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-center sm:text-left">
        Featured Projects
    </h1>
    <RepoList/>
  </div>);
}