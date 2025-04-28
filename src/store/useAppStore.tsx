import { create } from "zustand";

interface Repo {
  id: number;
  name: string;
  full_name: string;
}

interface AppState {
  username: string;
  repos: Repo[];
  selectedRepo: Repo | null;
  readme: string;
  isLoading: boolean;
  setUsername: (username: string) => void;
  setRepos: (repos: Repo[]) => void;
  setSelectedRepo: (repo: Repo) => void;
  setReadme: (readme: string) => void;
  setLoading: (loading: boolean) => void;
  toggleDarkMode: () => void;
  setProfile: (profile: object) => void;
}

export const useAppStore = create<AppState>((set) => ({
  username: "",
  repos: [],
  selectedRepo: null,
  readme: "",
  isLoading: false,
  profile: {},
  setProfile: (profile) => set({ profile }),
  setUsername: (username) => set({ username }),
  setRepos: (repos) => set({ repos }),
  setSelectedRepo: (repo) => set({ selectedRepo: repo }),
  setReadme: (readme) => set({ readme }),
  setLoading: (isLoading) => set({ isLoading }),
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));
