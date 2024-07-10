import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import React from "react";

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      {children}
      {modal}
      <Footer />
    </div>
  );
}
