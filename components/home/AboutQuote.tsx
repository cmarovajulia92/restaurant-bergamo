import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

export default function AboutQuote() {
  return (
    <section id="about">
      <div className="deco-icons" aria-hidden="true">
        <div className="deco-icon" style={{ left: '2%', top: '50%', transform: 'translateY(-50%) rotate(-8deg)', width: '150px', opacity: 0.13 }}>
          <Image src="/icons/restaurant.png" style={{ filter: 'invert(1)' }} alt="" width={150} height={150} />
        </div>
      </div>
      <ScrollReveal className="about-inner">
        <p className="about-quote">
          „Jedlo je naším jazykom lásky — <em>každý pokrm rozprávame s&nbsp;dušou.</em>"
        </p>
        <span className="about-attr">— Reštaurácia Bergamo, Humenné</span>
      </ScrollReveal>
    </section>
  );
}
