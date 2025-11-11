import "./globals.css";
import type { Metadata } from "next";
import Layout from "@/components/layouts/Layout";

export const metadata: Metadata = {
  title: "Splash App",
  description: "Shared Layout Example",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
