//code for checking if the window object is working correctly or not.
/**
 * Only for testing purposes.
 */

import React, { useEffect, useState } from "react";

const MyComponent = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Check if window is available (client-side)
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);

      // Clean up the event listener
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div>
      <h1>Window Width: {windowWidth}</h1>
    </div>
  );
};

export default MyComponent;
