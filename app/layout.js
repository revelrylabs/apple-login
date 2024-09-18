'use client'
import { SessionProvider } from "next-auth/react";
import './globals.css'; // Adjust if your CSS file is in a different path

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}