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
        "transition-shadow duration-200",
        "hover:shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
}
