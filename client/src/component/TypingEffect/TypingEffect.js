import { useEffect, useRef, useState } from "react";
import "./TypeingEffect.css";

const TypingEffect = ({ title, speed, index }) => {
  const [displayedText, setDisplayedText] = useState("");
  // const serviceBarRef = useRef([]);
  const sectionsRef = useRef([]);
  const [inViewSections, setInViewSections] = useState([]);

  const handleScroll = () => {
    sectionsRef.current.forEach((section, index) => {
      if (section) {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
        if (isInView) {
          setInViewSections((prevInViewSections) => {
            if (
              Array.isArray(prevInViewSections) &&
              !prevInViewSections.includes(section.className)
            ) {
              const typing = () => {
                setDisplayedText((prev) => title.substring(0, prev.length + 1));
              };
              if (displayedText.length != title.length) {
                const timer = setInterval(typing, speed);

                return () => clearInterval(timer);
              }
              return [...prevInViewSections, section.className];
            }
            return prevInViewSections;
          });
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 初始化时也检查一次

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const addSectionRef = (el, index) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current[index] = el;
    }
  };
  //   useEffect(() => {
  //     const typing = () => {
  //       setDisplayedText((prev) => title.substring(0, prev.length + 1));
  //     };
  //     if (displayedText.length != title.length) {
  //       const timer = setInterval(typing, speed);

  //       return () => clearInterval(timer);
  //     }
  //   }, []);

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
