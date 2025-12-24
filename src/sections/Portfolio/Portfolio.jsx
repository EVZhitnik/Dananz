import Section from '@/layouts/Section';
import './Portfolio.scss';
import Design from '@/components/Design';

export default () => {
  const designData = [
    {
      position: "after",
      imgSrc: "./src/assets/images/design/2.jpg",
      alt: "Modern living room interior with a green sofa, wooden coffee table, pouf, and potted plant",
      title: "Minimalist Room",
      description: "Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.",
      labelLink: "See More",
      href: "./details",
      author: [
        {
          authorImgSrc: "./src/assets/images/design/author/avatar-1.png",
          name: "Arga Danaan",
          department: "CEO of Dananz"
        },
      ],
    },
    {
      position: "before",
      imgSrc: "./src/assets/images/design/3.jpg",
      alt: "Dark vintage restaurant with wooden tables, chairs, and a neon arrow sign",
      title: "Vintage Room",
      description: "Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.",
      labelLink: "See More",
      href: "./details",
      author: [
        {
          authorImgSrc: "./src/assets/images/design/author/avatar-1.png",
          name: "Arga Danaan",
          department: "CEO of Dananz"
        },
      ],
    },
    {
      position: "after",
      imgSrc: "./src/assets/images/design/4.jpg",
      alt: "Modern living room with a fireplace, light sofa, and panoramic windows leading to a terrace with a dining area",
      title: "Modern Room",
      description: "Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.",
      labelLink: "See More",
      href: "./details",
      author: [
        {
          authorImgSrc: "./src/assets/images/design/author/avatar-1.png",
          name: "Arga Danaan",
          department: "CEO of Dananz"
        },
      ],
    },
    {
      position: "before",
      imgSrc: "./src/assets/images/design/5.jpg",
      alt: "Bright living room with a brown sofa, white armchairs, plants, and a wall of black-and-white photos",
      title: "Transitional Room",
      description: "Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.",
      labelLink: "See More",
      href: "./details",
      author: [
        {
          authorImgSrc: "./src/assets/images/design/author/avatar-1.png",
          name: "Arga Danaan",
          department: "CEO of Dananz"
        },
      ],
    },
  ];

  return (
    <Section
      className="portfolio"
      mode="portfolio"
      subtitle="portfolio"
      subtitleWidth="86px"
      titleId="portfolio-title"
    >
      <Design className="portfolio__design" designData={designData} />
    </Section>
  );
};