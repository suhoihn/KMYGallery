import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KMY — Software Developer",
  description: "Compiler engineering, game systems, developer tools, and applied AI.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
