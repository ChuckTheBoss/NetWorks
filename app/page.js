"use client";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2>
        <Link href="/posts/first-post">To First Page</Link>
      </h2>
    </>
  );
}
