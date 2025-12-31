import { useEffect } from "react";

export function useFadeInOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
