import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-center sm:text-left">
          Ethan's React/Next.js Demo
        </h1>

        <p className="text-lg sm:text-xl text-center sm:text-left">
          This is a simple demo of a Next.js app using Tailwind CSS and TypeScript.
          It includes a responsive layout, custom fonts, and basic navigation.
        </p>
      </main>
      <footer className="flex flex-col items-center justify-center gap-4 row-start-3">
        <Image
          src="/ethan_nunn.jpg"
          alt="Ethan Nunn"
          width={150}
          height={150}
          className="rounded-full"
        />
        <p className="text-sm text-gray-500">
          © 2025 Ethan Nunn. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
