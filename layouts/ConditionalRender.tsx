import React, { useState, useEffect } from "react";
import Computer from "./Computer";
import Mobile from "./Mobile";
// import Window from './Window'
const ResponsiveLayout = () => {
  const [windowWidth, setWindowWidth] = useState(768);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }
    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {windowWidth >= 768 ? (
        // Render desktop layout
        <div>
          <Computer />
          {/* Add desktop-specific components or styles */}
        </div>
      ) : (
        // Render mobile layout
        <div>
          <Mobile />
          {/* Add mobile-specific components or styles */}
        </div>
      )}
    </div>
  );
};

export default ResponsiveLayout;
