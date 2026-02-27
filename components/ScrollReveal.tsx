'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: 1 | 2 | 3;
  tag?: keyof JSX.IntrinsicElements;
}

export default function ScrollReveal({ children, className = '', delay, tag: Tag = 'div' }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in');
          obs.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const classes = ['reveal', delay ? `reveal-delay-${delay}` : '', className].filter(Boolean).join(' ');

  // @ts-expect-error dynamic tag
  return <Tag ref={ref} className={classes}>{children}</Tag>;
}
