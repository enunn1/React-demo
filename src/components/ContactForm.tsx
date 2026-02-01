"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {

    const [status, setStatus] = useState<Status>("idle");
    const [error, setError] = useState<string | null>(null);

    async function onSubmit(e: React.FormEvent < HTMLFormElement > ) {
		e.preventDefault();
		setStatus("sending");
		setError(null);

		const form = e.currentTarget;
		const formData = new FormData(form);

		const payload = {
			name: String(formData.get("name") ?? ""),
			email: String(formData.get("email") ?? ""),
			message: String(formData.get("message") ?? ""),
			website: String(formData.get("website") ?? ""), // honeypot
		};

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                throw new Error(data.error || "Failed to send message.");
            }
            setStatus("sent");
            form.reset();
        } catch(err: any) {
            setStatus("error");
            setError(err.message || "Failed to send message.");
        }
    }

    return (
        <form onSubmit={onSubmit} className="space-y-4 max-w-xl sm:min-w-lg">

            {/* Name Field */}
            <div className={status === "sent" ? 'hidden' : 'show'}>
                <label className="block text-sm font-medium mb-1" htmlFor="name">
                    Name
                </label>
                <input
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg border px-3 py-2 bg-white text-black border-neutral-200
                                dark:bg-neutral-900 dark:text-white dark:border-neutral-800"
                    autoComplete="name"
                />
            </div>

            {/* Email Field */}
            <div className={status === "sent" ? 'hidden' : 'show'}>
                <label className="block text-sm font-medium mb-1" htmlFor="email">
                    Email
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border px-3 py-2 bg-white text-black border-neutral-200
                                dark:bg-neutral-900 dark:text-white dark:border-neutral-800"
                    autoComplete="email"
                />
            </div>

            {/* Honeypot field (hidden) */}
            <div className="hidden">
                <label htmlFor="website">Website</label>
                <input id="website" name="website" tabIndex={-1} autoComplete="off" />
            </div>

            {/* Message Field */}
            <div className={status === "sent" ? 'hidden' : 'show'}>
                <label className="block text-sm font-medium mb-1" htmlFor="message">
                Project details
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full rounded-lg border px-3 py-2 bg-white text-black border-neutral-200
                                dark:bg-neutral-900 dark:text-white dark:border-neutral-800"
                    placeholder="What are you building? Timeline, goals, and any links help."
                />
            </div>

            <button
                type="submit"
                disabled={status === "sending"}
                className={"bg-blue-500 text-white px-4 py-2 font-semibold rounded-md border border-neutral-300 dark:border-neutral-800 " 
                    + (status === "sent" ? 'hidden' : 'show')}

            >
                {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "sent" && (
                <p className="text-sm text-green-600 dark:text-green-400">
                    Thanks — I got your message and I’ll reply soon.
                </p>
            )}

            {status === "error" && (
                <p className="text-sm text-red-600 dark:text-red-400">
                    {error ?? "Something went wrong. Please try again."}
                </p>
            )}

        </form>
    );
}