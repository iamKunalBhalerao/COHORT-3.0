import type { Metadata } from "next";
import localFont from "next/font/local";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
// });

export const metadata: Metadata = {
  title: "Chat App - Create Rooms - Invite Friends - Talk whole day and Night.",
  description: "Create Rooms - Invite Friends - Talk whole day and Night.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{padding: 0, margin: 0, boxSizing: "border-box"}}>
        {children}
      </body>
    </html>
  );
}
