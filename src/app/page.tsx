import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[15px_1fr_15px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-center sm:text-left">
          Ethan Nunn
        </h1>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center sm:text-left">
          Full-Stack Web Developer Available for Freelance Work
        </h2>
        <p className="text-lg sm:text-xl text-center sm:text-left">
         I help businesses and startups build fast, scalable web applications using React, Next.js, and modern cloud platforms.
        </p>
        <div className="flex justify-around w-full">
          <Link href="/contact">
            <button type="button" className="button px-4 py-2 font-semibold rounded-md border border-neutral-300 m-8">
              Request a Quote
            </button>
          </Link>
          <Link href="/portfolio">
            <button className="button px-4 py-2 font-semibold rounded-md border border-neutral-300 m-8">
              View My Work
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
