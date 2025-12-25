import Section from '@/layouts/Section';
import './Loaction.scss';

export default () => {
  const locationData = [
    {
      label: "Jakarta",
      description: "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.",
    },
    {
      label: "Surakarta",
      description: "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.",
    },
    {
      label: "Yogyakarta",
      description: "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.",
    },
    {
      label: "Bandung",
      description: "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.",
    },
  ];

  return (
    <Section
      className="loaction"
      subtitle="loaction"
      subtitleWidth="69px"
      titleId="loaction-title"
    >
      <div className="loaction__content">
        <div className="loaction__info">
          <div className="loaction__heading">
            <h3 className="loaction__title h2">Visit Our Stores</h3>
            <div className="loaction__text">Find us at these locations.</div>
          </div>
          <div className="loaction__actions">
            <div className="loaction__row">
              <h4 className="loaction__label">Email</h4>
              <a className="loaction__email" href="mailto:dananz@gmail.com">dananz@gmail.com</a>
            </div>
            <div className="loaction__row">
              <h4 className="loaction__label">Phone</h4>
              <a className="loaction__phone" href="tel:628150021000">+62 815 002 1000</a>
            </div>
          </div>
        </div>
        <ul className="loaction__list">
          {locationData.map(({ label, description }, index) => (
            <li className="loaction__item" key={index}>
              <h4 className="loaction__label">{label}</h4>
              <div className="loaction__description">{description}</div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};