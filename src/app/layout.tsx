import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"
import { Geist, Geist_Mono, Outfit, Quicksand } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit'
});

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand'
});

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light"
      suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${quicksand.variable} antialiased`}
      >
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
