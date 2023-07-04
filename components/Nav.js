import Link from "next/link";

export default function Nav() {
  return (
    <div>
      <Link href="/">
        <p>Home</p>
      </Link>
      <Link href="/Other">
        <p>Other</p>
      </Link>
      <Link href="/Mapping">
        <p>Mapping Data</p>
      </Link>
    </div>
  );
}
