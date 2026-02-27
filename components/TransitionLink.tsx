'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MouseEvent } from 'react';

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function TransitionLink({ href, children, className, onClick }: Props) {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    onClick?.();

    if ('startViewTransition' in document) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (document as any).startViewTransition(() => router.push(href));
    } else {
      router.push(href);
    }
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
