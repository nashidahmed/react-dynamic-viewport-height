// src/useDynamicViewportHeight.ts
import { useEffect, useState } from "react";

const useDynamicViewportHeight = () => {
  // Track initial and current viewport height
  const [initialHeight, setInitialHeight] = useState<number | null>(null);

  useEffect(() => {
    // Set the viewport height CSS variable
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    // Detect initial height and set viewport
    setInitialHeight(window.innerHeight);
    setViewportHeight();

    // Resize handler to manage viewport adjustments
    const handleResize = () => {
      const currentHeight = window.innerHeight;
      if (initialHeight && Math.abs(initialHeight - currentHeight) > 100) {
        setViewportHeight();
      }
    };

    // Keyboard event handlers for additional adjustment
    const handleKeyboardOpen = () => setViewportHeight();
    const handleKeyboardClose = () => setViewportHeight();

    // Add event listeners for resize and keyboard
    window.addEventListener("resize", handleResize);
    window.addEventListener("focusin", handleKeyboardOpen); // Focusin when keyboard opens
    window.addEventListener("focusout", handleKeyboardClose); // Focusout when keyboard closes

    // Cleanup event listeners
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("focusin", handleKeyboardOpen);
      window.removeEventListener("focusout", handleKeyboardClose);
    };
  }, [initialHeight]);

  return null;
};

export default useDynamicViewportHeight;
