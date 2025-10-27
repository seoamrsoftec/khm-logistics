import { GoogleAnalytics } from '@next/third-parties/google'
import { Roboto, Akshar } from "next/font/google";
import "./globals.css";
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

export const metadata = {
    title: `My Cab Portal - Taxi Service Website at Rs 1000 a Month Only`,
    description: `Get your taxi service website with My Cab Portal for just ₹1000/month! Create your professional taxi booking website in just 5 easy steps. Fast, affordable, and hassle-free!`,
  // Other metadata...
};
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});
const akshar = Akshar({
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
      <body className={roboto.className} suppressHydrationWarning={true}>
        <Header/>
        {children}
        <Footer/>
        {/* <GoogleAnalytics gaId="G-DDEHRD87EX" /> */}
      </body>
    </html>
  );
}
