import { useEffect, useRef, useState } from "react";
import "./ServiceTypingEffect.css";

const ServiceTypingEffect = ({ title, speed, index }) => {
  const [displayedText, setDisplayedText] = useState("");
  const sectionsRef = useRef([]);
  const timerRef = useRef([]);

  const handleScroll = () => {
    sectionsRef.current.forEach((section, i) => {
      if (section) {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
        if (isInView) {
          if (!timerRef.current[i]) {
            const typing = () => {
              setDisplayedText((prev) => {
                const nextText = title.substring(0, prev.length + 1);
                if (nextText.length === title.length) {
                  clearInterval(timerRef.current[i]);
                  timerRef.current[i] = null;
                }
                return nextText;
              });
            };
            timerRef.current[i] = setInterval(typing, speed);
          }
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      timerRef.current.forEach((timer) => clearInterval(timer));
    };
  }, []);
  const addSectionRef = (el, index) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current[index] = el;
    }
  };

  return (
    <div className="typing-container">
      <span className="service-typing-line-size">&lt; </span>
      <span
        className="displayedText service-typing-effect"
        ref={(el) => addSectionRef(el, index)}
      >
        {displayedText}
      </span>
      <span className="service-typing-line-size"> &gt;</span>
    </div>
  );
};

export default ServiceTypingEffect;
