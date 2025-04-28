"use client";
import { useAppStore } from "../store/useAppStore";
import { fetchReadme } from "../services/github";
import { markdownToHtml } from "../utils/markdownToHtml";

interface Repo {
  id: number;
  name: string;
  full_name: string;
}

export default function RepoList() {
  const repos = useAppStore((state) => state.repos);
  const setSelectedRepo = useAppStore((state) => state.setSelectedRepo);
  const setReadme = useAppStore((state) => state.setReadme);
  const isLoading = useAppStore((state) => state.isLoading);
  const setLoading = useAppStore((state) => state.setLoading);

  const handleSelect = async (repo: Repo) => {
    setLoading(true);
    setSelectedRepo(repo);
    try {
      const readme = await fetchReadme(repo.full_name);
      const html = markdownToHtml(await readme);
      setReadme(html);
    } catch {
      setReadme("<p>No README found.</p>");
    } finally {
      setLoading(false);
    }
  };

  if (isLoading && repos.length === 0)
    return <div className="loading-spinner"></div>;
  if (repos.length === 0) return null;

  return (
    <div className="repo-list">
      <h2>Repositories</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id} onClick={() => handleSelect(repo)}>
            {repo.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
