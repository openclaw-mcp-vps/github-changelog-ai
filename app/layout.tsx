import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GitHub Changelog AI – Auto-generate changelogs from commits",
  description: "Analyzes commit messages and PRs to generate user-facing changelogs with proper categorization. For open source maintainers and product teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="032b9418-6803-40a0-88e9-89c5c4aacd04"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
