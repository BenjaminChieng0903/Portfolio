import COntactMe from "../../ContactMe/ContactMe";
import TypingEffectRewindSlow from "../../TypingEffect/TypingEffectRewindSlow";
import "./Portoflio.css";
const Portoflio = () => {
  const texts = ["Portfolio"];
  const filterTitle = [
    "All Projects",
    "Web Development",
    "Web Application",
    "System"
  ];
  return (
    <div className="portfolio-container">
      <header className="child-hierarchy App-header-portfolio">
        <TypingEffectRewindSlow texts={texts} speed={150} />
        <span className="portfolio-section-intro">
          …lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          elementum, eros at sagittis facilisis, ante est rutrum ligula, at
          interdum eros sapien vel magna.
        </span>
      </header>
      <div className="portfolio-page-body-container">
        <div className="portfolio-filter">
          <div className="filter">
            <button>{filterTitle[0]}</button>
            <button>{filterTitle[1]}</button>
            <button>{filterTitle[2]}</button>
            <button>{filterTitle[3]}</button>
          </div>
          <div className="project"></div>
        </div>
        <COntactMe></COntactMe>
      </div>
    </div>
  );
};

export default Portoflio;
