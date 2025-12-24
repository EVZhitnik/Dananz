import Section from '@/layouts/Section';
import './Details.scss';
import { Image } from 'minista';

export default () => {
  const detailsTextData = [
    {
      title: "Project Overview",
      description: [
        "Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere."
      ],
      info: [
        {
          date: <><time datetime="2022-07-22">July 22 - 2022</time></>,
          label: "Interior Design - Furnitur",
        },
      ],
    },
    {
      title: "Design Process",
      description: [
        "Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.",
        "Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.",
      ],
    },
  ];

  const detailsImagesData = [
    {
      imgSrc: "./src/assets/images/details/1.jpg",
      alt: "White designer chair and woven basket with a towel on a wooden floor against a white wall",
    },
    {
      imgSrc: "./src/assets/images/details/2.jpg",
      alt: "Wooden shelf with a black smartphone, glasses on a holder, and a green notepad with a pencil on a white wall.",
    },
    {
      imgSrc: "./src/assets/images/details/3.jpg",
      alt: "Grey sofa with a patterned pillow and a white side table with a desk lamp",
    },
    {
      imgSrc: "./src/assets/images/details/4.jpg",
      alt: "Empty white room with suspended light fixtures and smooth walls",
    },
    {
      imgSrc: "./src/assets/images/details/5.jpg",
      alt: "Dark blue sofa, white dresser, floor lamp, and tall potted plant in a bright room",
    },
  ];

  return (
    <Section
      className="details"
      titleId="details-title"   
    >
      <div className="details__text">
        {detailsTextData.map(({title, description, info}, index) => (
          <div className="details__column" key={index}>
            <h3 className="details__title h4">{title}</h3>
            <div className="details__description">
              {description.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
            {info && (
              info.map(({ date, label }, index) => (
                <div className="details__info" key={index}>
                  <p className="details__date">{date}</p>
                  <p className="details__label">{label}</p>
                </div>
              ))
            )}
          </div>
        ))}
      </div>
      <div className="details__images">
        {detailsImagesData.map(({ imgSrc, alt }, index) => (
          <Image 
            className="details__image"
            src={imgSrc}
            alt={alt}
            key={index}
          />
        ))}
      </div>
    </Section>
  );
};