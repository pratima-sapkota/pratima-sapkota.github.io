'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

interface TypingEffectProps {
  text: string | string[];
  speed?: number;
  delay?: number;
  showCursor?: boolean;
  onComplete?: () => void;
  className?: string;
  skipable?: boolean;
}

export function TypingEffect({
  text,
  speed = 50,
  delay = 0,
  showCursor = true,
  onComplete,
  className = '',
  skipable = true,
}: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(delay > 0 ? 0 : 1);
  const [isSkipped, setIsSkipped] = useState(false);
  const hasCompletedRef = useRef(false);

  const fullText = Array.isArray(text) ? text.join('\n') : text;
  const isComplete = isSkipped || currentIndex > fullText.length;

  useEffect(() => {
    if (isSkipped) {
      return;
    }

    if (currentIndex === 0 && delay > 0) {
      const delayTimeout = setTimeout(() => {
        setCurrentIndex(1);
      }, delay);
      return () => clearTimeout(delayTimeout);
    }

    if (currentIndex > 0 && currentIndex <= fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentIndex));
        setCurrentIndex(currentIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }

    if (currentIndex > fullText.length && !hasCompletedRef.current) {
      hasCompletedRef.current = true;
      onComplete?.();
    }
  }, [currentIndex, delay, fullText, isSkipped, onComplete, speed]);

  const handleSkip = () => {
    if (skipable && !isComplete) {
      setIsSkipped(true);
      setDisplayedText(fullText);
      if (!hasCompletedRef.current) {
        hasCompletedRef.current = true;
        onComplete?.();
      }
    }
  };

  return (
    <div className={`relative ${className}`}>
      <pre className="whitespace-pre-wrap font-mono">
        {displayedText}
        {showCursor && !isComplete && <span className="cursor" />}
      </pre>
      {skipable && !isComplete && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={handleSkip}
          className="absolute bottom-0 right-0 text-xs text-text-muted hover:text-matrix-green transition-colors"
        >
          [Skip →]
        </motion.button>
      )}
    </div>
  );
}
