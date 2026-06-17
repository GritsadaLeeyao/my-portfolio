"use client";

import { useEffect, useRef, useState } from "react";

interface Options {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseAfterType?: number;
}

function getInitialReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useTypewriter({
  words,
  typeSpeed = 80,
  deleteSpeed = 45,
  pauseAfterType = 2000,
}: Options) {
  const reducedMotion = useRef(getInitialReducedMotion());
  const [text, setText] = useState(words[0] ?? "");
  const wordIndex = useRef(0);
  const isDeleting = useRef(false);
  const charIndex = useRef(words[0]?.length ?? 0);

  useEffect(() => {
    if (reducedMotion.current) return;

    let timeoutId: ReturnType<typeof setTimeout>;
    let pauseId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const currentWord = words[wordIndex.current % words.length];

      if (!isDeleting.current) {
        charIndex.current += 1;
        setText(currentWord.slice(0, charIndex.current));

        if (charIndex.current === currentWord.length) {
          pauseId = setTimeout(() => {
            isDeleting.current = true;
            tick();
          }, pauseAfterType);
          return;
        }

        timeoutId = setTimeout(tick, typeSpeed);
      } else {
        charIndex.current -= 1;
        setText(currentWord.slice(0, charIndex.current));

        if (charIndex.current === 0) {
          isDeleting.current = false;
          wordIndex.current = (wordIndex.current + 1) % words.length;
        }

        timeoutId = setTimeout(tick, deleteSpeed);
      }
    };

    timeoutId = setTimeout(tick, typeSpeed);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(pauseId);
    };
  }, [words, typeSpeed, deleteSpeed, pauseAfterType]);

  return text;
}
