"use client";

import { type RefObject, useEffect, useState } from "react";

export default function useScrollSpy(
  refs: Array<RefObject<HTMLElement | null>>,
  options?: IntersectionObserverInit
) {
  const [activeSection, setActiveSection] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entires) => {
      entires.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry);
          setActiveSection(entry.target as HTMLElement);
        }
      });
    }, options);

    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [refs, options]);

  return activeSection;
}
