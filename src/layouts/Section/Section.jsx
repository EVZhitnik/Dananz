import './Section.scss';
import clsx from 'clsx';

export default (props) => {
  const {
    className,
    mode = '',
    isTwoColumnsInfo = false,
    subtitle,
    subtitleWidth,
    title,
    titleId,
    description,
    children,
  } = props;

  const headerContent = (
    <>
      <span 
        className="section__subtitle"
        style={subtitleWidth ? { '--subtitle-width': subtitleWidth } : undefined}
      >
        {subtitle}
      </span>
      <h2 
        className={clsx("section__title h2", {
        [`section__title--${mode}`]: mode,
      })} 
        id={titleId}
      >
        {title}
      </h2>
    </>
  );

  return (
    <section 
      className={clsx(className, 'section container')}
      aria-label={titleId}  
    >
      <header className={clsx("section__header", {
        [`section__header--${mode}`]: mode,
      })}>
        <div className="section__info">
          {isTwoColumnsInfo ? (
            <div className="section__wrapper">
              {headerContent}
            </div>
          ) : headerContent}
          {description && (
            <div className={clsx("section__description", {
              [`section__description--${mode}`]: mode,
            })}>
              <p>{description}</p>
            </div>
          )}
        </div>
      </header>
      <div className="section__body">
        {children}
      </div>
    </section>
  );
};