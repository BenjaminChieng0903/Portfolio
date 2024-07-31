import "./ContactMe.css";
const COntactMe = () => {
  return (
    <section className="contact-me-section">
      <span>(*)</span>
      <h1 className="any-section-title">&lt;Contact_me&gt;</h1>
      <p className="any-section-intro">
        //.. Contact/Enquire the future rising star in IT industry
      </p>
      <form className="contact-form">
        <input type="text" placeholder="_name*" required></input>
        <input type="email" placeholder="_email*" required></input>
        <textarea
          className="message"
          placeholder="_message*"
          required
        ></textarea>
      </form>
      <button className="homepage-button">&#123;send&#125;</button>
    </section>
  );
};

export default COntactMe;
