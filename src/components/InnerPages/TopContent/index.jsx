import Section from '@/components/sections/Section';
import styles from './TopContent.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/sections/Container';
import SectionTitle from '@/components/sections/SectionTitle';

export default function TopContent({ title, titlespan, subtitle, photo, topparagraph, topcontent }) {
  return (
    <Section className={styles.aboutOne}>
        <Container>
            <div className="grid xl:grid-cols-2 gap-10">
                <div className="col">
                    <SectionTitle
                        subtitle={subtitle}
                        titlespan={titlespan}
                        title={title}
                    />
                    <div className="max-w-[600px] mt-10">
                        <Image src={photo || "/images/home/about/about.jpg"} className={styles.photo} alt={title} width={800} height={500} />
                    </div>
                </div>
                <div className="col">
                    <SectionTitle content={topparagraph} />                
                    <div className={`mt-6 ${styles.topContent}`} dangerouslySetInnerHTML={{ __html: topcontent }} />
                    <div className="flex gap-4 mt-6">
                        <Link href="tel:+61415426195" className="btn primary">
                            <span>+61 415 426 195</span>
                        </Link>
                        <Link href="/contact-us" className="btn">
                            <span>Get a Quote</span>
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    </Section>
  );
}
