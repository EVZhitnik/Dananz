import clsx from 'clsx';
import './Design.scss';
import { Image } from 'minista';
import Button from '@/components/Button';

export default (props) => {
  const {
    className,
    designData = [],
  } = props;

  const getContentDesign = (title, description, labelLink, href) => {
    return (
      <div className="design__content">
        {title && (
          <h3 className="design__title h4">{title}</h3>
        )}
        <div className="design__description">
          <p>{description}</p>
        </div>
        <Button 
          className="design__button"
          href={href}
          label={labelLink}
        />
      </div>
    );
  };

  return (
    <div className={clsx(className, "design")}>
      {designData.map((items, index) => {
        const {
          position,
          imgSrc,
          alt,
          title, 
          description,
          labelLink,
          href, 
          author,
        } = items;

        return (
          <div 
            className={clsx("design__item", {
              [`design__item--${position}`]: position
            })} 
            key={index}
          >
            {position === "before" && getContentDesign(title, description, labelLink, href)}

            <div className="design__image">
              <Image src={imgSrc} alt={alt}/>
              {author.map(({ authorImgSrc, name, department }, index) => (
                <div 
                  className={clsx("design__author", {
                    [`design__author--${position}`]: position
                })} 
                  key={index}
                >
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

            {position === "after" && getContentDesign(title, description, labelLink, href)}
          </div>         
        )})}
    </div>
  );
};