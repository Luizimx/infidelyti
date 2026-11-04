import type React from "react"
import "./globals.css"
import { Inter, Space_Mono } from "next/font/google"
import { cn } from "@/lib/utils"
import Script from "next/script"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
})

export const metadata = {
  title: "Infidelity Pro - Secret Social Scan",
  description: "Discover hidden profiles, private messages, and suspicious likes.",
    generator: 'v0.app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-background">
      <head>
        <Script
          id="google-tag-manager"
          src="https://www.googletagmanager.com/gtm.js?id=GTM-M9JMT5WR"
          strategy="beforeInteractive"
        />
        <Script
          id="google-data-layer"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date());",
          }}
        />
        <Script
          id="utmify-script"
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          strategy="afterInteractive"
        />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable, spaceMono.variable)}>
        {children}
      </body>
    </html>
  )
}
