import React, { useEffect, useRef } from "react";
import "./ScrollComponent.css";

const ScrollComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      const items = container.querySelectorAll(".scroll-item");
      const containerCenter =
        container.getBoundingClientRect().top + container.clientHeight / 2;

      items.forEach((item) => {
        const itemCenter =
          item.getBoundingClientRect().top + item.clientHeight / 2;
        const distance = Math.abs(containerCenter - itemCenter);

        if (distance < item.clientHeight / 2) {
          item.classList.add("highlighted");
        } else {
          item.classList.remove("highlighted");
        }
      });
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
      <div className="scroll-item">10°</div>
    </div>
  );
};

export default ScrollComponent;
