import Section from '@/layouts/Section';
import './Material.scss';
import { Image } from 'minista';

export default () => {
  return (
    <Section
      className="material"
      isTwoColumnsSection
      mode="material"
      subtitle="material"
      subtitleWidth="76px"
      title={<>choice of <br />materials for <br />quality furniture.</>}
      titleId="material-title"
      description="You can custom the material as desired. And our furniture uses the best materials and selected quality materials."
      actions
    >
      <div className="material__wrapper">
        <Image 
          className="material__image"
          src="./src/assets/images/material/material-image-1.jpg"
          alt="Different types of building tiles"
        />
        <div className="material__images">
          <Image 
            className="material__image"
            src="./src/assets/images/material/material-image-2.jpg"
            alt="Different types of building tiles"
          />
          <Image 
            className="material__image"
            src="./src/assets/images/material/material-image-3.jpg"
            alt="Different types of building tiles"
          />
        </div>
      </div>
    </Section>
  );
};