import Section from "@/layouts/Section";
import "./Success.scss";
import { Image } from "minista";

export default (props) => {
  const {
    label = "",
  } = props;

  const successData = [
    { 
      imgSrc: "./src/assets/images/success/1.jpg",
      alt: "Modern living room with white and black furniture, panoramic windows, and a view of a green terrace with a pool",
      title: "Interior design",
      description: "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.",
    },
    { 
      imgSrc: "./src/assets/images/success/2.jpg",
      alt: "Two women sitting at a table browsing a furniture website on a laptop",
      title: "Consultant",
      description: "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.",
    },
    { 
      imgSrc: "./src/assets/images/success/3.jpg",
      alt: "A man presents in front of a whiteboard with sticky notes while three colleagues listen, seated on a sofa and chair",
      title: "Сonstruction consultant",
      description: "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.",
    },
  ];

  return (
    <Section
      className="success"
      label={label}
      mode="success"
      subtitle="achievement"
      subtitleWidth="110px"
    >
      <ul className="success__list">
        {successData.map(({imgSrc, alt, title, description }, index) => (
          <li className="success__item" key={index}>
            <Image 
              className="success__image"
              src={imgSrc}
              alt={alt}
            />
            <div className="success__info">
              <h3 className="success__title h4">{title}</h3>
              <div className="success__description">
                <p>{description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
};
