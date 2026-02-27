'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = -100, my = -100;
    let rx = -100, ry = -100;
    let rafId: number;

    const move = (x: number, y: number) => {
      dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    };

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      move(mx, my);
    };

    // Ring follows with lerp — only transform, no layout reflow
    const loop = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    document.addEventListener('mousemove', onMove, { passive: true });

    const targets = 'a, button, input, textarea, select, .menu-card, .dm-tab, .side-item, .daily-card, .daily-nav-arrow, label';

    const addHover = (el: Element) => {
      el.addEventListener('mouseenter', () => { dot.classList.add('hover'); ring.classList.add('hover'); });
      el.addEventListener('mouseleave', () => { dot.classList.remove('hover'); ring.classList.remove('hover'); });
    };
    document.querySelectorAll(targets).forEach(addHover);

    // Only process newly added nodes, not full DOM scan
    const obs = new MutationObserver((mutations) => {
      mutations.forEach(m => {
        m.addedNodes.forEach(node => {
          if (!(node instanceof Element)) return;
          if (node.matches(targets)) addHover(node);
          node.querySelectorAll(targets).forEach(addHover);
        });
      });
    });
    obs.observe(document.body, { childList: true, subtree: true });

    const onDown  = () => { dot.classList.add('click');    ring.classList.add('click'); };
    const onUp    = () => { dot.classList.remove('click'); ring.classList.remove('click'); };
    const onLeave = () => { dot.style.opacity = '0';  ring.style.opacity = '0'; };
    const onEnter = () => { dot.style.opacity = '1';  ring.style.opacity = '1'; };

    document.addEventListener('mousedown',  onDown);
    document.addEventListener('mouseup',    onUp);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('mousemove',  onMove);
      document.removeEventListener('mousedown',  onDown);
      document.removeEventListener('mouseup',    onUp);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      obs.disconnect();
    };
  }, []);

  return (
    <>
      <div className="cur-dot"  ref={dotRef} />
      <div className="cur-ring" ref={ringRef} />
    </>
  );
}
