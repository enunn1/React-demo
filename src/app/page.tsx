import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[15px_1fr_15px] items-center justify-items-center min-h-screen p-8 pb-16 gap-16 sm:p-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[24px] row-start-2 items-center sm:items-start">

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-center sm:text-left">
          Full-Stack Web Developer Available for Freelance Work
        </h1>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center sm:text-left">
          Ethan Nunn
        </h2>
        <p className="text-lg sm:text-xl text-center sm:text-left">
         I help businesses and startups build fast, scalable web applications using React, Next.js, and modern cloud platforms.
        </p>
        <div className="flex justify-around w-full mt-8 mb-6">
          <Link href="/contact">
            <button type="button" className="bg-blue-500 text-white px-4 py-2 font-semibold rounded-md border border-neutral-300">
              Request a Quote
            </button>
          </Link>
          <Link href="/featured-projects">
            <button className="secondary-button px-4 py-2 font-semibold rounded-md border border-neutral-300">
              View My Work
            </button>
          </Link>
        </div>
        <section className="max-w-6xl mx-auto px-6 py-10">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Services
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <ServiceCard
              title="Custom Web Applications"
              description="Design and development of fast, scalable web apps tailored to your business needs."
            />
            <ServiceCard
              title="MVP & Prototype Development"
              description="Rapid prototyping to validate ideas and get to market quickly."
            />
            <ServiceCard
              title="API & Backend Development"
              description="Secure, well-structured APIs and backend systems built to scale."
            />
          </div>
        </section>
      </main>
    </div>
  );
}
