import Button from '@/components/Button';
import './Connect.scss';

export default () => {
  return (
    <section className="connect" aria-label="connect-title">
      <div className="connect__inner container">
        <h2 className="connect__title">let's discuss making your interior like a dream place!</h2>
        <div className="connect__info">
          <div className="container__description">
            <p>
              Contact us below to work together to build your amazing interior
            </p>
          </div>
          <Button 
            className="connect__link"
            mode="section"
            href="./contact"
            label="Contact Us"
          />
        </div>
      </div>
    </section>
  );
};