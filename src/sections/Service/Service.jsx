import Section from '@/layouts/Section';
import './Service.scss';
import Button from '@/components/Button';
import { Image } from 'minista';
import Accordion from '@/components/Accordion';

export default () => {

  const serviceData = [
    {
      title: "Interior Design",
      description: "the use of simple and limited elements to get the best effect or impression."
    },
    {
      title: "Consultant",
      description: "the use of simple and limited elements to get the best effect or impression."
    },
    {
      title: "Construction Consultant",
      description: "the use of simple and limited elements to get the best effect or impression."
    },
  ];

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
      <div className="service__accordion">
        <Accordion
          mode="service" 
          tag="h3"
          CSSClassTag="h4" 
          accordionData={serviceData} 
        />
      </div>
      <Image 
        className="service__image"
        src="./src/assets/images/service/service-image.jpg"
        alt="Design of a cozy room with a sofa and armchairs"
      />
    </Section>
  );
};