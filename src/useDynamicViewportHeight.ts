import { useEffect, useState } from "react";

const useDynamicViewportHeight = () => {
  // Track the initial height to compare when resizing
  const [initialHeight, setInitialHeight] = useState<number | null>(null);

  useEffect(() => {
    // Function to set the viewport height as a CSS variable
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    // Set initial height and viewport height
    setInitialHeight(window.innerHeight);
    setViewportHeight();

    // Update viewport height on resize
    const handleResize = () => {
      const currentHeight = window.innerHeight;

      // Check if the height change is significant (e.g., keyboard opened/closed)
      if (initialHeight && Math.abs(initialHeight - currentHeight) > 100) {
        setViewportHeight();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [initialHeight]);

  return null;
};

export default useDynamicViewportHeight;
