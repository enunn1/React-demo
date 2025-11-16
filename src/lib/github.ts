export async function getRepoList() {
  const res = await fetch('https://api.github.com/users/enunn1/repos', {
    next: { revalidate: 3600 }, // cache for 1 hour
  });
  if (!res.ok) throw new Error('Failed to fetch repos');
  return res.json();
}

export async function getRepoDetails(repoName: string) {
  const res = await fetch(`https://api.github.com/repos/enunn1/${repoName}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error(`Failed to fetch repo: ${repoName}`);
  return res.json();
}
