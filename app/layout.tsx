import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  title: "Am I exam-ready?",
  description: "A 10-minute check to see if you're ready to book the Goethe A1 exam.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block"
        />
      </head>
      <body className="bg-white font-sans text-on-surface antialiased">
        {/* Mobile-first column, max 480px wide (from the design system) */}
        <div className="mx-auto flex min-h-dvh w-full max-w-[480px] flex-col px-margin">{children}</div>
      </body>
    </html>
  );
}
