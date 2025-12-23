import Section from '@/layouts/Section';
import './About.scss';
import Design from '@/components/Design';

export default (props) => {
  const {
    label = "",
  } = props;

  const designData = [
    {
      imgSrc: "./src/assets/images/design/1.jpg",
      description: "Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.",
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
      className="about"
      label={label}
      mode="about"
      subtitle="about"
      subtitleWidth="54px"
      title="“We're one of the best furniture agency. Prioritizing customers and making purchases easy are the hallmarks of our agency.”"
      titleId="about-title"
    >
      <Design 
        className="about__design"
        designData={designData}
      />
    </Section>
  );
};