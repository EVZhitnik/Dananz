import Results from '@/components/Results';
import './Hero.scss';
import { Image } from 'minista';
import clsx from 'clsx';

export default (props) => {
  const {
    label = '',
  } = props;

  const heroData = {
    about: [
      {
        title: "About",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        imgSrc: "./src/assets/images/hero/2.jpg",
        alt: "A team of people are considering a business project"
      },
    ],
    servisec: [
      {
        title: "Servisec",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        imgSrc: "./src/assets/images/hero/3.jpg",
        alt: "Design of a cozy room with a sofa and armchairs"
      },
    ],
    teams: [
      {
        title: "Teams",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        imgSrc: "./src/assets/images/hero/4.jpg",
        alt: "Team hands on the table"
      },
    ],
    portfolio: [
      {
        title: "Portfolio",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        imgSrc: "./src/assets/images/hero/5.jpg",
        alt: "A cozy room with a desk and a laptop"
      },
    ],
    room: [
      {
        title: "Minimalist Room",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        imgSrc: "./src/assets/images/hero/6.jpg",
        alt: "Minimalist room with a sofa and table"
      },
    ],
  };

  const getHeroBodyOfTheHomePage = () => {
    return (
      <section className="hero" aria-label="hero-label">
        <header className={clsx("hero__header hero__header--home container")}>
          <h1 className="hero__label" id="hero-label">Design your <br /> interor with high <br /> quality.</h1>
          <p className="hero__copyright">
            <time dateTime="2022">2022</time>
            <br />
            all right reserved
          </p>
        </header>
        <div className={clsx("hero__body hero__body--home container")}>
          <Results className="hero__results" />
          <Image 
            className="hero__image" 
            src="./src/assets/images/hero/1.jpg"
            alt="Renovated kitchen made from high-quality materials" 
          />
        </div>
      </section>
    );
  };

  const getDefaultPageBody = (label) => {
    return (
      <section className={clsx("hero", "container")} aria-label="hero-label">
        {heroData[label].map((({ title, description, imgSrc, alt }, index) => (
          <>
            <header className="hero__header">
              <h1 className="hero__title" id="hero-label">{title}</h1>
              <div className="hero__descriprion">{description}</div>
            </header>
            <div className="hero__body" key={index}>
              <Image 
                className="hero__image" 
                src={imgSrc}
                alt={alt}
              />
            </div>
          </>
        )))}
      </section>
    );
  };

  return (
    <div>
      {label === "home"
        ? getHeroBodyOfTheHomePage()
        : getDefaultPageBody(label)
      }
    </div>
  );
};