import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-amber-50 min-h-screen flex flex-col justify-between">
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
