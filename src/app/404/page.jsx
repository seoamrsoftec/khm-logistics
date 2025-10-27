'use client';

import Container from '@/components/sections/Container';
import Section from '@/components/sections/Section';
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
export default function ErrorPage() {
return (
    <>
      <Header />
      <Section className="">
        <Container>
          <h1>404 page Not Found</h1>
        </Container>
      </Section>
      <Footer />
    </>
  );
}