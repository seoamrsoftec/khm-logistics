import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter, Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: `My Cab Portal - Taxi Service Website at Rs 1000 a Month Only`,
  description: `Get your taxi service website with My Cab Portal for just ₹1000/month! Create your professional taxi booking website in just 5 easy steps. Fast, affordable, and hassle-free!`,
  // Other metadata...
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
