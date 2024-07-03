import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-5 flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-semibold">AI Content Generator</h1>
      <p className="font-medium text-3xl">Generate AI content with ease.</p>
      <Link href="/dashboard">
        <Button variant={"secondary"} className="bg-background px-10 py-6 text-2xl rounded-lg">Get Started</Button>
      </Link>
    </div>
  );
}
