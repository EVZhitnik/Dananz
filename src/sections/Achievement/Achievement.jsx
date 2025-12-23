import Section from '@/layouts/Section';
import './Achievement.scss';
import { Image } from 'minista';
import Results from '@/components/Results';

export default () => {
  return (
    <Section
      className="achievement"
      mode="achievement"
      subtitle="achievement"
      subtitleWidth="110px"
      title={<>interior customization with Danaanz,<br />best quality with professional workers</>}
      titleId="achievement-title"
    >
      <div className="achievement__content">
        <Image 
          className="achievement__image"
          src="./src/assets/images/achievement/achievement-image.jpg"
        />
        <Results 
          className="achievement__results"
        />
      </div>
    </Section>
  );
};