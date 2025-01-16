import Form from "../Form/Form";

import imageMobile from "../../assets/images/hero-mobile.jpg";
import imageDesktop from "../../assets/images/hero-desktop.jpg";

import "../../assets/styles/Main.scss";

export default function Main() {
  return (
    <main>
      <section className="image">
        <img src={imageMobile} alt="" className="mobile" />
        <img src={imageDesktop} alt="" className="desktop" />
      </section>

      <section className="text-form">
        <div className="text">
          <div className="title">
            <h1>We&apos;re</h1>
            <h2>coming soon</h2>
          </div>
          <p>
            Hello fellow shoppers! We&apos;re currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
        </div>

        <Form />
      </section>
    </main>
  );
}
