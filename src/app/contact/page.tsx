import ContactForm from "@/components/ContactForm";

export default function Page() {
  return  (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-center sm:text-left">
          Contact Me
      </h1>
      <p className="text-neutral-600 dark:text-neutral-400 mb-10">
        Tell me a bit about your project. I typically respond within 24 hours.
      </p>

      <ContactForm />
    </div>
  )
}