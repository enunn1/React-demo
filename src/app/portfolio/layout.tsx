import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Featured full-stack projects including React, Angular, Nest.js, and Spring Boot applications.",
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      {children}
    </section>
  );
}