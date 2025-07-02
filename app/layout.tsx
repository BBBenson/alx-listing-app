import type React from "react"
import type { Metadata } from "next"
import "../styles/globals.css"

export const metadata: Metadata = {
  title: "ALX Stays - Find Your Perfect Getaway",
  description: "Discover unique places to stay, from cozy cabins to luxury villas. Your next adventure starts here.",
  keywords: ["travel", "accommodation", "vacation rental", "airbnb", "hotels"],
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">{children}</body>
    </html>
  )
}
