import { Button } from "@repo/ui/button";

export default function Home() {
  return (
    <div className="flex-1 grid place-items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-10 text-white">
      <h1 className="text-5xl font-bold drop-shadow-lg">
        Welcome to Our Landing Page!
      </h1>
      <p className="mt-4 text-xl drop-shadow-lg">
        Discover our amazing products and services.
      </p>
      <Button>Get Started</Button>
    </div>
  );
}
