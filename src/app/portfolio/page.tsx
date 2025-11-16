"use client"

import { useEffect, useState } from 'react';
import { getRepoList } from '@/lib/github';
import Link from 'next/link';

type Repo = {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
};

function RepoList() {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const data = await getRepoList();
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
                    key={repo.id} 
                    href={`/portfolio/${repo.name}`}
                    className="border p-4 rounded-xl shadow-sm hover:shadow transition"
                >
                    <h2 className="text-xl font-semibold text-left mb-1">{repo.name}</h2>
                    <p className="text-sm mb-2">{repo.description ?? 'No description provided.'}</p>
                </Link>
            ))}
        </div>
    ) ;
}

export default function Page() {
  return  (
  <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-center sm:text-left">
        Portfolio Page
    </h1>
    <RepoList/>
  </div>);
}