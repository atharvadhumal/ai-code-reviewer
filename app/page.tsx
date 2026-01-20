import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <Link href={"/review"} className="bg-blue-400 p-2 rounded-md">
        Review
      </Link>
    </div>
  );
}
