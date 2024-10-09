import React, { useEffect, useState } from "react";
import "./TypingEffectRewindSlow.css";
import { PropsTypeTypingEffectRewind } from "./typeInterface/PropsTypeTypingEffectRewind";
const TypingEffectRewindSlow = (props: PropsTypeTypingEffectRewind) => {
  const {texts, speed} = props;
  const [displayedText, setDisplayedText] = useState("");
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(speed);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const titleArray = texts;
      const currentLoopTitleIndex = loopNum % texts.length;
      const currentTitle = titleArray[currentLoopTitleIndex];

      setDisplayedText(
        isDeleting
          ? currentTitle.substring(0, displayedText.length - 1)
          : currentTitle.substring(0, displayedText.length + 1)
      );

      setTypingSpeed(isDeleting ? speed * 2 : speed);

      if (!isDeleting && displayedText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 5000);
        // setIsDeleting(true);
      } else if (isDeleting && displayedText === "") {
        setLoopNum(loopNum + 1);
        setIsDeleting(false);
        // setTimeout(() => setIsDeleting(false), 500);
      }
    };

    const typeTimer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typeTimer);
  }, [displayedText, typingSpeed, isDeleting, loopNum, texts, speed]);

  return (
    <div className="typingContainer">
      <span className="typing-line-size-slow">&#123; &quot;</span>
      <span className="typing-effect-slow">{displayedText}</span>
      <span className="typing-line-size-slow">&quot; &#125;</span>
    </div>
  );
};

export default TypingEffectRewindSlow;
