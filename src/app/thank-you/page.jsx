"use client";

import Image from "next/image";
import Link from "next/link";

export default function ThankYou() {  
  return (
    <section
      className="relative flex flex-col items-center justify-center pb-[100px] pt-[200px] text-center text-white overflow-hidden"
      style={{
        backgroundImage: `url('/images/thankyou/thankyou.webp')`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
     
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      <div className="relative z-10 max-w-xl bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-10 shadow-2xl">
        <div className="flex justify-center  mb-6">
          <Image
            src="/images/logo/logo-final.png"
            alt="Success Icon"
            width={100}
            height={100}
            className="drop-shadow-2xl bg-white p-2 rounded-sm "
            priority
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-white">
          Thank You for Reaching Out!
        </h1>

        <p className="text-white/90 leading-relaxed mb-8">
          Your inquiry has been successfully submitted.  
          Our team at <span className="font-semibold text-secondary">KHM Logistics</span> will connect with you soon.  
          We truly appreciate your trust in our services.
        </p>
        <Link href="/" className="px-8 py-3 rounded-full font-medium text-white shadow-md transition-all duration-300 bg-[--secondary] hover:bg-black" >
         Back to Home
        </Link>
      </div>

      <p className="relative z-10 mt-10 text-sm text-white/70">
        © {new Date().getFullYear()} KHM Logistics. All rights reserved.
      </p>
    </section>
  );
}
