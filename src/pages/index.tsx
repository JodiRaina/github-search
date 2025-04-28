import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer"; // <-- import Footer
import SearchBar from "../components/SearchBar";
import RepoList from "../components/RepoList";
import ReadmeViewer from "../components/ReadmeViewer";
import { useAppStore } from "../store/useAppStore";

export default function Home() {
  const isDarkMode = useAppStore((state) => state.isDarkMode);

  return (
    <>
      <Head>
        <title>GitHub Search</title>
        <meta
          name="description"
          content="Search GitHub users and view their repositories and README content easily."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={isDarkMode ? "dark" : "light"}>
        <Header />
        <main className="container">
          <SearchBar />
          <RepoList />
          <ReadmeViewer />
        </main>
        <Footer />
      </div>
    </>
  );
}
