"use client";
import Link from "next/link";
import "../../styles/header.css";

import { useTheme } from "next-themes";

const Button = () => {
  const { theme } = useTheme();
  return (
    <>
     <button type="button" className="btn top-fill dark:text-gray-400"> <Link href="/">
                Subscribe
              </Link></button>
    </>
  );

};

export default Button;