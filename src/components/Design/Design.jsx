import clsx from 'clsx';
import './Design.scss';
import { Image } from 'minista';
import Button from '@/components/Button';

export default (props) => {
  const {
    className,
    designData = [],
  } = props;

  return (
    <div className={clsx(className, "design")}>
      {designData.map(({imgSrc, description, author }, index) => (
        <div className="design__body" key={index}>
          <div className="design__image">
            <Image 
              src={imgSrc} 
              alt="Beautiful kitchen design made from high-quality materials"
            />
            {author.map(({ authorImgSrc, name, department }, index) => (
              <div className="design__author" key={index}>
                <Image 
                  className="design__author-avatar"
                  src={authorImgSrc}
                  alt={`Photo by ${name}`}
                />
                <div className="design__author-info">
                  <span className="design__author-name">{name}</span>
                  <span className="design__author-department">{department}</span>
                </div>
              </div> 
            ))}
          </div>
          <div className="design__content">
            <div className="design__description">
              <p>{description}</p>
            </div>
            <Button 
              className="design__button"
              href="./"
              label="Learn More"
            />
          </div>
        </div>
      ))}
    </div>
  );
};