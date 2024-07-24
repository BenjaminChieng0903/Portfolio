import { useEffect, useState } from "react";
import "./TypeingEffect.css";

const TypingEffect = ({ title, speed, index }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const typing = () => {
      setDisplayedText((prev) => title.substring(0, prev.length + 1));
    };
    const timer = setInterval(typing, speed);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="service-bar">
      <span className={`service-bar-title typing-effect-${index}`}>
        {displayedText}
      </span>
    </div>
  );
};

export default TypingEffect;
