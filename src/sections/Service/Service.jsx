import Section from '@/layouts/Section';
import './Service.scss';
import Button from '@/components/Button';
import { Image } from 'minista';

export default () => {

  return (
    <Section
      className="service"
      mode="service"
      subtitle="service"
      subtitleWidth="65px"
      title="attractive furniture with the best quality."
      titleId="service-title"
      description="Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations."
    >
      <div className="service__content">
        <ol className="service__list">
          <li className="service__item">
            <h3 className="service__title h4">Interior Design</h3>
            <Button 
              className="service__link"
              hred="./"
              isLabelHidden
              iconName="arrow-right"
            />
          </li>
          <li className="service__item">
            <h3 className="service__title h4">Consultant</h3>
            <Button 
              className="service__link"
              hred="./"
              isLabelHidden
              iconName="arrow-right"
            />
          </li>
          <li className="service__item">
            <h3 className="service__title h4">Construction Consultant</h3>
            <Button 
              className="service__link"
              hred="./"
              isLabelHidden
              iconName="arrow-right"
            />
          </li>
        </ol>
      </div>
      <Image 
        className="service__image"
        src="./src/assets/images/service/service-image.jpg"
        alt="Design of a cozy room with a sofa and armchairs"
      />
    </Section>
  );
};