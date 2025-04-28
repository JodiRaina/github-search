import Link from "next/link";

export default function Custom404() {
  return (
    <div
      className="container"
      style={{ textAlign: "center", paddingTop: "5rem" }}
    >
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for doesn't exist.</p>
      <Link href="/">
        <button style={{ marginTop: "20px", padding: "10px 20px" }}>
          Go Back Home
        </button>
      </Link>
    </div>
  );
}
