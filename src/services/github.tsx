export async function fetchRepos(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  if (!res.ok) throw new Error("Failed to fetch repos");
  return res.json();
}

export async function fetchReadme(fullName: string): Promise<string> {
  const res = await fetch(`https://api.github.com/repos/${fullName}/readme`, {
    headers: { Accept: "application/vnd.github.VERSION.raw" },
  });
  if (!res.ok) throw new Error("Failed to fetch README");

  const text = await res.text();
  return text;
}
