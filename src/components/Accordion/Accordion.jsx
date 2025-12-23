import clsx from 'clsx';
import './Accordion.scss';
import Icon from '@/components/Icon';

export default (props) => {
  const {
    mode = "",
    tag = "",
    CSSClassTag = "",
    accordionData = [],
  } = props;

  const Tag = tag;

  return (
    <>
      {accordionData.map(({ title, description }, index) => {
        const serviceId = `${mode}-${index + 1}`;
        const ariaDetails = `${mode}-${index + 1}`;

        return (
          <div className="accordion" key={index}>
            <details className="accordion__details" name={mode} open>
              <summary className={clsx("accordion__summary", {
                [`accordion__summary--${mode}`]: mode,
              })}>
                <Tag className={clsx("accordion__title", {[CSSClassTag]: CSSClassTag})}>
                  <span role="term" aria-details={ariaDetails}>{title}</span>
                </Tag>
                <Icon
                  className="accordion__icon"
                  name="arrow-right"
                  ariaLabel="accordion__icon-arrow-right"
                />
              </summary>
            </details>
            <div 
              className="accordion__content" 
              id={serviceId}
              role="definition"
            >
              <div className="accordion__content-inner">
                <div className={clsx("accordion__content-body", {
                  [`accordion__content-body--${mode}`]: mode,
                })}>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </div>
        )})}
    </>
  );
};