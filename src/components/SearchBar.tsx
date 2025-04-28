"use client";
import { useState } from "react";
import { useAppStore } from "../store/useAppStore";
import { fetchRepos } from "../services/github";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const setUsername = useAppStore((state) => state.setUsername);
  const setProfile = useAppStore((state) => state.setProfile);
  const setRepos = useAppStore((state) => state.setRepos);
  const setLoading = useAppStore((state) => state.setLoading);

  const handleSearch = async () => {
    if (input) {
      try {
        setError(false);
        setLoading(true);
        setUsername(input);
        const repos = await fetchRepos(input);
        setRepos(repos);
        if (repos.length > 0) {
          setProfile(repos[0].owner);
        }
      } catch {
        alert("Error fetching repositories.");
      } finally {
        setLoading(false);
      }
    } else {
      setError(true);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {error && <p className="error-input">Username is Required</p>}
    </form>
  );
}
