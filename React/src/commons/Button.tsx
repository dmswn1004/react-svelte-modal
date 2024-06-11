import '../styles/button.css';
import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonColor } from "../types/button";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick: () => void;
  color: ButtonColor;
}

export default function Button({children, onClick, color, ...props}: ButtonProps) {
  return (
    <button onClick={onClick} className={`btn ${color}`} {...props}>{children}</button>
  )
}