"use client";
import { useState } from "react";
import Link from "next/link";
export default function Button({
  next,
  link,
}: {
  next?: boolean;
  link?: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={link ? link : "/services"}>
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`border border-light-0 hover:bg-light-0 rounded-full transall ${
          next ? "px-6 py-4" : "p-5"
        } "`}
      >
        {next ? (
          <svg
            className="w-5"
            width="24"
            height="22"
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L10.6667 11.6667L1 21"
              stroke={hovered ? "#131213" : "#F0F0F0"}
              stroke-width="2"
            />
            <path
              d="M12.3334 1L22 11.6667L12.3334 21"
              stroke={hovered ? "#131213" : "#F0F0F0"}
              stroke-width="2"
            />
          </svg>
        ) : (
          <svg
            className="w-7 "
            width="32"
            height="16"
            viewBox="0 0 32 16"
            fill={hovered ? "#131213" : "#F0F0F0"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M31.7071 8.70711C32.0976 8.31658 32.0976 7.68342 31.7071 7.29289L25.3431 0.928932C24.9526 0.538408 24.3195 0.538408 23.9289 0.928932C23.5384 1.31946 23.5384 1.95262 23.9289 2.34315L29.5858 8L23.9289 13.6569C23.5384 14.0474 23.5384 14.6805 23.9289 15.0711C24.3195 15.4616 24.9526 15.4616 25.3431 15.0711L31.7071 8.70711ZM0 9H31V7H0V9Z" />
          </svg>
        )}
      </button>
    </Link>
  );
}
