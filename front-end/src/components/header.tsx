import Link from "next/link";
import "@/styles/components/header.css";

export default function Header() {
  return (
    <header className="hdr">
      <div className="hdr-title">
        <h2>OLD SCHOOL</h2>
      </div>
      <nav className="hdr-nav">
        <Link href="/student/register">
          <span>Register</span>
        </Link>
      </nav>
    </header>
  );
}
