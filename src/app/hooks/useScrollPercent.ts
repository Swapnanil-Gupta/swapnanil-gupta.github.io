"use client";

import { type RefObject, useState, useEffect } from "react";

const useScrollPercentage = (
  scrollableElementRef: RefObject<HTMLElement | null>
) => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollElement = scrollableElementRef.current;
      if (!scrollElement) return;

      const scrollTop = scrollElement.scrollTop;
      const scrollHeight =
        scrollElement.scrollHeight - scrollElement.clientHeight;
      const scrollPercent = Math.floor((scrollTop / scrollHeight) * 100);

      setScrollPercentage(scrollPercent);
    };

    const scrollElement = scrollableElementRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrollableElementRef]);

  return scrollPercentage;
};

export default useScrollPercentage;
