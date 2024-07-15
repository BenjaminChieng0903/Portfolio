import TypingEffect from "../../TypingEffect/TypingEffect";
import "./homePage.css";
const HomePage = () => {
  const texts = ["Software Engineer", "Full-stack Developer"];
  return (
    <div className="App">
      <header className="App-header">
        <span className="self-intro">Hi, I'm BENJAMIN QIAN, A....</span>
        <TypingEffect texts={texts} speed={150} />
      </header>
    </div>
  );
};

export default HomePage;
