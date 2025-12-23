import Section from '@/layouts/Section';
import './Benefits.scss';

export default () => {
  const benefitsTitles = [
    "High Quality",
    "Professional Designer", 
    "The Best Services"
  ];

  const benefitsDescription = "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.";

  return (
    <Section
      className="benefits"
      mode="benefits"
      subtitle="service"
      subtitleWidth="65px"
      title="Why Choose Us"
      titleId="benefits"
      description="Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations."
    >
      <ul className="benefits__list">
      {benefitsTitles.map((title, index) => (
        <li className="benefits__item" key={index}>
          <div className="benefits__circle"></div>
          <h3 className="benefits__title h4">{title}</h3>
          <div className="benefits__description">
            <p>{benefitsDescription}</p>
          </div>
        </li>
      ))}
    </ul>
    </Section>
  );
};