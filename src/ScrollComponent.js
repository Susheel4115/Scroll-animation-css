import React, { useEffect, useRef } from "react";
import "./ScrollComponent.css";

const ScrollComponent = () => {
  const containerRef = useRef(null);
  console.log("inside the componen");
  useEffect(() => {
    const container = containerRef.current;
    console.log("inside useeffect");

    const handleScroll = () => {
      let debounceTimer;
      console.log("inside handlescroll");
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
      <div className="scroll-item">0°</div>
      <div className="scroll-item">1°</div>
      <div className="scroll-item">2°</div>
      <div className="scroll-item">3°</div>
      <div className="scroll-item">4°</div>
      <div className="scroll-item">5°</div>
      <div className="scroll-item">6°</div>
      <div className="scroll-item">7°</div>
      <div className="scroll-item">8°</div>
      <div className="scroll-item">9°</div>
    </div>
  );
};

export default ScrollComponent;
