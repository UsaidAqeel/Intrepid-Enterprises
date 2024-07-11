import type { Metadata } from "next";
import "@/styles/globals.css";
import { siteConfig } from "@/config/site";
import { ThemeProvider } from "@/components/theme-provider";
import SmoothScroller from "@/components/scroll";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:700,400,900|Roboto:900,700"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider defaultTheme="light" attribute="class" enableSystem>
          {children}
        </ThemeProvider>
        <SmoothScroller />
      </body>
    </html>
  );
}
