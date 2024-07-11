import React from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
      <main className="flex flex-col min-h-screen">
        <Navbar theme="light" />
        {children}
        <Footer />
      </main>
    );
};

export default Layout;
