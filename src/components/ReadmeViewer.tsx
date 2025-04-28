"use client";
import { useAppStore } from "../store/useAppStore";

export default function ReadmeViewer() {
  const readme = useAppStore((state) => state.readme);
  const selectedRepo = useAppStore((state) => state.selectedRepo);

  if (!selectedRepo) return null;

  return (
    <div className="readme-viewer">
      <h2>README - {selectedRepo.name}</h2>
      <div dangerouslySetInnerHTML={{ __html: readme }} />
    </div>
  );
}
