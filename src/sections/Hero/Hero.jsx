import Results from '@/components/Results';
import './Hero.scss';
import { Image } from 'minista';

export default (props) => {
  const {
    label = '',
  } = props;

  const getHeroBodyOfTheHomePage = () => {
    return (
      <section className="hero" aria-label="hero-label">
        <header className="hero__header container">
          <h1 className="hero__label" id="hero-label">Design your <br /> interor with high <br /> quality.</h1>
          <p className="hero__copyright">
            <time datetime="2022">2022</time>
            <br />
            all right reserved
          </p>
        </header>
        <div className="hero__body container">
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

  return (
    <div>
      {label === "home"
        ? getHeroBodyOfTheHomePage()
        : getDefaultPageBody()
      }
    </div>
  );
};