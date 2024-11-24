import { useEffect, useState } from "react";
import { setViewportHeight } from "./setViewportHeight";

const useViewportHeightEffect = () => {
  // Track initial and current viewport height
  const [initialHeight, setInitialHeight] = useState<number | null>(null);

  useEffect(() => {
    // Detect initial height and set viewport
    const handleInitialLoad = () => {
      setInitialHeight(window.innerHeight);
      setViewportHeight();
    };

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

    // Ensure the correct height is set during the initial load
    if (document.readyState === "complete") {
      handleInitialLoad();
    } else {
      window.addEventListener("load", handleInitialLoad);
    }

    // Add event listeners for resize and keyboard
    window.addEventListener("resize", handleResize);
    window.addEventListener("focusin", handleKeyboardOpen); // Focusin when keyboard opens
    window.addEventListener("focusout", handleKeyboardClose); // Focusout when keyboard closes

    // Cleanup event listeners
    return () => {
      window.removeEventListener("load", handleInitialLoad);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("focusin", handleKeyboardOpen);
      window.removeEventListener("focusout", handleKeyboardClose);
    };
  }, [initialHeight]);
};

export default useViewportHeightEffect;
