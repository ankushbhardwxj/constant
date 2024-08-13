"use client";

import { User } from "@/lib/models/user.model";
import { UserStoreProvider } from "@/lib/stores/auth.store";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userStore = User.create({
    firstName: "",
    lastName: "",
    email: "",
  });

  function loadInitialState() {}

  useEffect(() => {
    loadInitialState();
  });

  return (
    <UserStoreProvider value={userStore}>
      <html lang="en">
        <body style={inter.style}>{children}</body>
      </html>
    </UserStoreProvider>
  );
}
