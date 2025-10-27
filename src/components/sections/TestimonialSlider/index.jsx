'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './TestimonialSlider.module.css';
import Image from 'next/image';
import Container from "@/components/sections/Container";
import Section from "@/components/sections/Section";
import SectionTitle from "@/components/sections/SectionTitle";

const testimonials = [
  {
    quote: "Sydney Container Forwarders provided us with outstanding transport service. The entire process was easy to manage and stress-free. Their drivers were on time, friendly, and professional. I will definitely use them again in the future.",
    name: "James Mitchell",
    role: "Happy Customer",
    image: "/images/profile.png",
  },
  {
    quote: "I used their import and export container service recently and was very impressed. Everything was handled smoothly from start to finish. The communication was excellent throughout the process. I couldn’t be happier with the outcome.",
    name: "Sophie Anderson",
    role: "Happy Customer",
    image: "/images/profile.png",
  },
  {
    quote: "The side loader container service saved us so much effort and time. It made unloading quick, safe, and extremely efficient. Their team worked carefully without causing any delays. A fantastic service I would recommend to anyone.",
    name: "Liam Harrison",
    role: "Happy Customer",
    image: "/images/profile.png",
  },

];

export default function TestimonialSlider() {
  return (
    <Section className="py-16 bg-white">
      <Container>
        <SectionTitle
            subtitle="Hear From Our Clients"
            titlespan="What Our Clients Say"
            title="About Sydney Container Forwarders"
            content="Sydney Container Forwarders consistently deliver reliable, efficient, and hassle‑free logistics services. Their attention to detail, smooth coordination, and commitment to on‑time delivery give us complete peace of mind with every shipment."
        />
       <Swiper
          modules={[Pagination, Autoplay]} 
          autoplay={{
            delay: 3000, 
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} ${styles.customBullet}"></span>`;
            },
          }}
          spaceBetween={40}
          slidesPerView={1}
          className="m-10"
           breakpoints={{
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
              
                750: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                }
           }}
        >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index} className='pb-16'>
            <div className={styles.Testimonialslide}>
              <div className={styles.Testimonialinner}>
                  <span className={styles.testiicon}> 
                    <svg id="fi_16131392" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" fill="#f9d94e" className={styles.testiiconsvg}>
                    <path d="m126.73981 40.76686c-2.63916-12.50348-12.51245-27.319-27.95227-30.301a27.25938 27.25938 0 0 0 -21.71154 5.35752 27.69519 27.69519 0 0 0 .12018 44.40442 27.27562 27.27562 0 0 0 25.50854 4.3241 1.32914 1.32914 0 0 1 1.24969.18658 1.36428 1.36428 0 0 1 .54279 1.177c-1.24872 27.63934-26.03766 38.44519-30.99451 40.3313a3.65761 3.65761 0 0 0 -2.32312 3.93732s.63245 4.64105.63318 4.64648a3.72526 3.72526 0 0 0 4.98767 2.91656c56.56665-22.96453 52.52532-64.7268 49.93939-76.98028zm-51.019 73.10065-.5423-3.97839c5.90228-2.29535 31.97559-14.10144 33.31714-43.79291a5.34836 5.34836 0 0 0 -7.10162-5.32434 23.287 23.287 0 0 1 -21.7677-3.72241 23.69718 23.69718 0 0 1 -.109-38.05546 23.237 23.237 0 0 1 18.51093-4.59955c13.64789 2.63525 22.42041 15.94653 24.79529 27.19879 2.41784 11.45445 6.1441 50.44468-47.10279 72.27427z"></path>
                    <path d="m87.29272 22.0024a2.00015 2.00015 0 1 0 1.43728 3.73315c.07477-.0293 7.44562-2.78473 11.73273 2.51807a2.00077 2.00077 0 1 0 3.1131-2.51416c-6.09866-7.54254-15.86978-3.8963-16.28311-3.73706z"></path>
                    <path d="m32.78754 10.4659a27.25938 27.25938 0 0 0 -21.71154 5.35748 27.69519 27.69519 0 0 0 .12018 44.40442 27.27562 27.27562 0 0 0 25.50854 4.3241 1.32914 1.32914 0 0 1 1.24969.18658 1.36428 1.36428 0 0 1 .54279 1.177c-1.24872 27.63934-26.03766 38.44519-30.99451 40.3313a3.65761 3.65761 0 0 0 -2.32312 3.93732s.63245 4.64105.63318 4.64648a3.72526 3.72526 0 0 0 4.98767 2.91656c56.56665-22.96453 52.52532-64.7268 49.93939-76.98028-2.63916-12.50348-12.51245-27.31897-27.95227-30.30096zm-23.06678 103.40161-.5423-3.97839c5.90228-2.29535 31.97559-14.10144 33.31714-43.79291a5.34836 5.34836 0 0 0 -7.1016-5.32434 23.287 23.287 0 0 1 -21.7677-3.72241 23.69718 23.69718 0 0 1 -.10897-38.05546 23.237 23.237 0 0 1 18.51093-4.59955c13.64789 2.63523 22.42041 15.94655 24.79529 27.19877 2.41784 11.45447 6.1441 50.4447-47.10279 72.27429z"></path>
                    <path d="m21.29272 22.0024a2.00015 2.00015 0 1 0 1.43728 3.73315c.07477-.0293 7.44556-2.78473 11.73267 2.518a2.0545 2.0545 0 0 0 2.81464.299 1.99994 1.99994 0 0 0 .29852-2.813c-6.09866-7.54263-15.86978-3.89639-16.28311-3.73715z"></path>
                    </svg>
                  </span>
                  <p className={styles.testicontent}>{t.quote}</p>
                    <div className={styles.Testinameandimage}>
                      <Image
                        width={100}
                        height={100}
                        src={t.image}
                        alt={t.name}
                        className="w-[50px] h-[50px] rounded-full object-cover"
                      />
                      <div className="text-left">
                        <p className="font-bold text-lg">{t.name}</p>
                        <p className="text-sm">{t.role}</p>
                      </div>
                    </div>
              </div>
            </div>
         </SwiperSlide>
        ))}
      </Swiper>
      </Container>
  </Section>
  );
}
