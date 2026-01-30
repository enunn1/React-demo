import { ReactNode } from "react";
import clsx from "clsx";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-xl border",
        "transition-shadow transition-transform duration-300",
        "hover:shadow-lg",
        "hover:-translate-y-1",
        "dark:hover:shadow-[0_10px_30px_rgba(255,255,255,0.08)]",
        className
      )}
    >
      {children}
    </div>
  );
}
