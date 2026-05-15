import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;

  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: Props) {
  const baseStyles = "px-6 py-3 rounded-2xl font-bold transition";

  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",

    secondary: "bg-slate-100 hover:bg-slate-200 text-slate-800",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
