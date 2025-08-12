import type React from "react"
import type { Metadata } from "next"
import { Source_Code_Pro } from "next/font/google"
import "./globals.css"

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Dev Shah | Software Engineer",
  description: "Terminal‑style portfolio showcasing React, Node.js and security projects.",
  keywords: ["Dev Shah", "Software Engineer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Dev Shah" }],
  creator: "Dev Shah",
  openGraph: {
    title: "Dev Shah | Software Engineer",
    description: "Terminal‑style portfolio showcasing React, Node.js and security projects.",
    url: "https://shahdev.com",
    siteName: "Dev Shah Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev Shah | Software Engineer",
    description: "Terminal‑style portfolio showcasing React, Node.js and security projects.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // CHANGED: tame extension attrs
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning data-gramm="false" className={`${sourceCodePro.variable} font-mono antialiased`}>
        {children}
      </body>
    </html>
  )
}
