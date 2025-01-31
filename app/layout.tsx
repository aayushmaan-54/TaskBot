import type { Metadata } from "next";
import { Outfit, Reenie_Beanie } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";


export const metadata: Metadata = {
  title: "Task Bot",
  description: "",
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
  },
};


export const outfit = Outfit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-outfit',
});

export const handwriting = Reenie_Beanie({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-handwriting',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`
        ${outfit.variable} ${handwriting.variable} 
        ${outfit.className} 
        antialiased suppress-hydration-warning`
      }>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}