import React, { useEffect, useRef } from "react";
import "./ScrollComponent.css";

const ScrollComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    let debounceTimer;

    const handleScroll = () => {
      clearTimeout(debounceTimer);

      debounceTimer = setTimeout(() => {
        const items = container.querySelectorAll(".scroll-item");
        const containerCenter =
          container.getBoundingClientRect().top + container.clientHeight / 2;

        let closestItem = null;
        let minDistance = Infinity;

        items.forEach((item) => {
          const itemCenter =
            item.getBoundingClientRect().top + item.clientHeight / 2;
          const distance = Math.abs(containerCenter - itemCenter);

          if (distance < minDistance) {
            closestItem = item;
            minDistance = distance;
          }
        });

        items.forEach((item) => {
          item.classList.toggle("highlighted", item === closestItem);
        });
      }, 100); // Adjust the timeout value as needed
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call to highlight the item on mount

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-container" ref={containerRef}>
      <div className="scroll-item">20°</div>
      <div className="scroll-item">21°</div>
      <div className="scroll-item">22°</div>
      <div className="scroll-item">23°</div>
      <div className="scroll-item">24°</div>
      <div className="scroll-item">25°</div>
      <div className="scroll-item">26°</div>
    </div>
  );
};

export default ScrollComponent;
