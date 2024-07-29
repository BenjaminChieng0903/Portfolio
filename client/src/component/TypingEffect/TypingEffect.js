import { useEffect, useRef, useState } from "react";
import "./TypeingEffect.css";

const TypingEffect = ({ title, speed, index }) => {
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
                  timerRef.current[i] = null; // 置空，表示定时器已完成
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
    handleScroll(); // 初始化时也检查一次

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
    <div className={`service-bar-${index}`}>
      <span className="typing-line-size">&#123; &quot;</span>
      <span
        ref={(el) => addSectionRef(el, index)}
        className={`service-bar-title typing-effect-${index}`}
      >
        {displayedText}
      </span>
      <span className="typing-line-size">&quot; &#125;</span>
    </div>
  );
};

export default TypingEffect;
