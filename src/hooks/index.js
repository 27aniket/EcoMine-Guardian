/**
 * Custom React Hooks
 */

import { useEffect, useRef, useState } from "react";

/**
 * Hook to detect if element is in viewport
 */
export const useInView = () => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isInView];
};

/**
 * Hook for animated counter
 */
export const useCounter = (end, duration = 2000, shouldStart = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startValue = 0;
    const incrementValue = end / (duration / 16);
    let currentCount = startValue;

    const interval = setInterval(() => {
      currentCount += incrementValue;
      if (currentCount >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.ceil(currentCount));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [shouldStart, end, duration]);

  return count;
};

/**
 * Hook for scroll animations
 */
export const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
};
