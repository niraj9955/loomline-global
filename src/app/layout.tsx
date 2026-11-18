import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Loomline Global | Fashion & E-Commerce Growth Solutions",
  description:
    "End-to-end partner for fashion and e-commerce brands — product photography, AI imagery, garment sourcing, business development, digital marketing and complete online store support.",
  keywords: [
    "product photography",
    "photo editing",
    "AI product photos",
    "garment sourcing",
    "business development",
    "digital marketing",
    "meta ads",
    "email marketing",
    "e-commerce catalogue",
    "SKU management",
    "fashion tech packs",
  ],
  authors: [{ name: "Loomline Global" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Loomline Global | Fashion & E-Commerce Growth Solutions",
    description:
      "From product shoot to profitable sale — your end-to-end fashion commerce partner.",
    siteName: "Loomline Global",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
