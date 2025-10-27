"use client";
import Section from '@/components/sections/Section';
import Container from '@/components/sections/Container';
import SectionTitle from '@/components/sections/SectionTitle';
import React, { useState } from "react";
export default function FAQSection ({faqs}) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
      <Section className="bg-[#dbe8fa]">
         <Container>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-[20px] md:gap-[50px] xl:gap-[100px] lg:gap-[80px] items-start">
                      <div className='relative top-0 md:sticky xl:sticky lg:sticky md:top-[150px] xl:top-[150px] lg:top-[150px]'>
                        <SectionTitle
                          subtitle="Got Questions?"
                          titlespan="FREQUENTLY ASKED QUESTIONS"
                          title="ABOUT CONTAINER TRANSPORT IN SYDNEY"
                          content= "We understand that choosing the right container transport service can come with a few questions. To make things easier, we’ve answered some of the most common queries our customers have. Here’s what you need to know"
                        />
                      </div>
                      <div className="space-y-4 text-left">
                      {faqs.map((faq, index) => (
                        <div key={index} className="bg-white shadow-md rounded p-5">
                          <button
                            className="w-full text-left font-semibold text-xl flex justify-between items-center"
                            onClick={() => toggleFAQ(index)}
                          >
                            {faq.question}
                            <span>{openIndex === index ? "-" : "+"}</span>
                          </button>
                          {openIndex === index && (
                            <p className="mt-3 text-gray-700 text-xl transition-all">{faq.answer}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
         </Container>
      </Section>
 
  );
};