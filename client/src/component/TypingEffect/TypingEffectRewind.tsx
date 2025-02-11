import React, { useEffect, useState } from 'react'
import './TypingEffectRewind.css'
import { PropsTypeTypingEffectRewind } from './typeInterface/PropsTypeTypingEffectRewind'
const TypingEffectRewind = (props: PropsTypeTypingEffectRewind) => {
  const { texts, speed } = props
  const [displayedText, setDisplayedText] = useState('')
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(speed)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const handleTyping = () => {
      const titleArray = texts
      const currentLoopTitleIndex = loopNum % texts.length
      const currentTitle = titleArray[currentLoopTitleIndex]

      setDisplayedText(
        isDeleting
          ? currentTitle.substring(0, displayedText.length - 1)
          : currentTitle.substring(0, displayedText.length + 1),
      )

      setTypingSpeed(isDeleting ? speed / 2 : speed)

      if (!isDeleting && displayedText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 500)
        // setIsDeleting(true);
      } else if (isDeleting && displayedText === '') {
        setLoopNum(loopNum + 1)
        setIsDeleting(false)
        // setTimeout(() => setIsDeleting(false), 500);
      }
    }

    const typeTimer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(typeTimer)
  }, [displayedText, typingSpeed, isDeleting, loopNum, texts, speed])

  return (
    <div className="typingContainer">
      <span className="typing-effect-rewind-typing-line-size">
        &#123; &quot;
      </span>
      <span className="typing-effect">{displayedText}</span>
      <span className="typing-effect-rewind-typing-line-size">
        &quot; &#125;
      </span>
    </div>
  )
}

export default TypingEffectRewind
