"use client";

import { useEffect, useState } from "react";

interface Options {
  words: string[];
  typeSpeed?: number;   // ms per character typing
  deleteSpeed?: number; // ms per character deleting
  pauseAfterType?: number; // ms pause after fully typed
  pauseAfterDelete?: number; // ms pause after fully deleted
}

export function useTypewriter({
  words,
  typeSpeed = 80,
  deleteSpeed = 45,
  pauseAfterType = 2000,
  pauseAfterDelete = 400,
}: Options) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setText(currentWord.slice(0, text.length + 1));

        if (text.length + 1 === currentWord.length) {
          // Fully typed — pause then start deleting
          setTimeout(() => setIsDeleting(true), pauseAfterType);
        }
      } else {
        // Deleting
        setText(currentWord.slice(0, text.length - 1));

        if (text.length - 1 === 0) {
          // Fully deleted — move to next word
          setIsDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseAfterType]);

  return text;
}
