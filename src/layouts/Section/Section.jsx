import Button from '@/components/Button';
import './Section.scss';
import clsx from 'clsx';

export default (props) => {
  const {
    className,
    label,
    isTwoColumnsSection = false,
    mode = '',
    isTwoColumnsInfo = false,
    subtitle,
    subtitleWidth,
    title,
    titleId,
    description,
    actions = false,
    children,
  } = props;

  const getheaderContent = () => {
    return (
      <>
        {title ? (
          <h2 
            className={clsx("section__title h2", {
            [`section__title--${mode}`]: mode,
          })} 
            id={titleId}
          >
            {title}
          </h2>
        ) : (
          <h2 
            className={clsx("section__title visually-hidden")} 
            id={titleId}
          >
            {className.charAt(0).toUpperCase() + className.slice(1)}
          </h2>
        )}
        {description && (
          <div className={clsx("section__description", {
            [`section__description--${mode}`]: mode,
          })}>
            <p>{description}</p>
          </div>
        )}
      </>
    );
  };

  return (
    <section 
      className={clsx(className, 'section', {
        [`section--${mode}`]: isTwoColumnsSection,
      },
      {[`section--${label}`]: label},
      'container'
    )}
      aria-label={titleId}  
    >
      <header className={clsx("section__header", {
        [`section__header--${mode}`]: mode,
      })}>
        <div className="section__info">
          {subtitle && (
            <span 
              className="section__subtitle"
              style={subtitleWidth ? { '--subtitle-width': subtitleWidth } : undefined}
            >
              {subtitle}
            </span>
          )}
          {isTwoColumnsInfo ? (
            <div className="section__wrapper">
              {getheaderContent()}
            </div>
          ) : getheaderContent()}
          {actions && (
            <Button 
              className="section__button"
              mode="section"
              href="./"
              label="See Materials"
            />
          )}
        </div>
      </header>
      <div className="section__body">
        {children}
      </div>
    </section>
  );
};