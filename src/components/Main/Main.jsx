import imageMobile from "../../assets/images/hero-mobile.jpg";
import imageDesktop from "../../assets/images/hero-desktop.jpg";
import iconArrow from  "../../assets/images/icon-arrow.svg";


export default function Main() {
  return (
    <main>
      <section className="image">
        <img src={imageMobile} alt="" className="mobile" />
        <img src={imageDesktop} alt="" className="desktop" />
      </section>

      <section className="text-form">
        <div className="texto">
          <h1>
            We&apos;re <span>coming soon</span>
          </h1>
          <p>
            Hello fellow shoppers! We&apos;re currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
        </div>

        <form>
          <fieldset className="input-box">
            <input type="email" placeholder="Email Address" />
            <span className="error"></span>
            <button type="submit">
              <img src={iconArrow} alt="" className="icon-arrow" />
            </button>
          </fieldset>
        </form>
      </section>
    </main>
  );
}
