import './Section.scss';
import clsx from 'clsx';

const Section = (props) => {
  const {
    className,
    tag = 'h2',
    title,
    titleId,
    description,
    actions,
    isActionsHiddenOnMobile = false,
    children,
  } = props;

  return (
    <section 
      className={clsx(className, 'section container')}
      aria-label={titleId}  
    >
      <header className="section__header">
        <div className="section__info">
          <h2 className="section__title h2" id={titleId}>{title}</h2>
          {description && (
            <div className="section__description">
              <p>{description}</p>
            </div>
          )}
        </div>
        {actions && (
          <div 
            className={clsx('section__actions', {'hidden-mobile': isActionsHiddenOnMobile})}
          >
            {actions}
          </div>
        )}
      </header>
      <div className="section__body">
        {children}
      </div>
    </section>
  )
}

export default Section;