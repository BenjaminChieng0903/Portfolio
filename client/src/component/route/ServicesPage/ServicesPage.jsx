import COntactMe from "../../ContactMe/ContactMe";
import TypingEffectRewindSlow from "../../TypingEffect/TypingEffectRewindSlow";
import "./ServicesPage.css";
const ServicesPage = () => {
  const texts = ["Services"];
  return (
    <div className="services-container">
      <header className="child-hierarchy App-header-services">
        <TypingEffectRewindSlow texts={texts} speed={150} />
        <span className="services-section-intro">
          …lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          elementum, eros at sagittis facilisis, ante est rutrum ligula, at
          interdum eros sapien vel magna.
        </span>
      </header>
      <div className="background-image-container"></div>
      <div className="services-page-body-container">
        <section className="services-info-container">
          <span className="grid-border">hi, grid 1</span>
          <span className="grid-border grid-info-style">
            …lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut
            dui tortor. Maecenas cursus velit sit amet orci tincidunt hendrerit.
            Etiam tincidunt nisl at nibh ullamcorper, at lacinia arcu egestas.
            Maecenas sed volutpat enim, ut vulputate sapien;
          </span>
          <span className="grid-border">hi, grid 1</span>
          <span className="grid-border grid-info-style">
            …lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut
            dui tortor. Maecenas cursus velit sit amet orci tincidunt hendrerit.
            Etiam tincidunt nisl at nibh ullamcorper, at lacinia arcu egestas.
            Maecenas sed volutpat enim, ut vulputate sapien;
          </span>
          <span className="grid-border">hi, grid 1</span>
          <span className="grid-border grid-info-style">
            …lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut
            dui tortor. Maecenas cursus velit sit amet orci tincidunt hendrerit.
            Etiam tincidunt nisl at nibh ullamcorper, at lacinia arcu egestas.
            Maecenas sed volutpat enim, ut vulputate sapien;
          </span>
          <span className="grid-border">hi, grid 1</span>
          <span className="grid-border grid-info-style">
            …lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut
            dui tortor. Maecenas cursus velit sit amet orci tincidunt hendrerit.
            Etiam tincidunt nisl at nibh ullamcorper, at lacinia arcu egestas.
            Maecenas sed volutpat enim, ut vulputate sapien;
          </span>
        </section>
        <COntactMe></COntactMe>
      </div>
    </div>
  );
};

export default ServicesPage;
