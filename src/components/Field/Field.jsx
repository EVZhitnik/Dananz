import getIdFromTitle from '@/utils/getIdFromTitle';
import './Field.scss';
import clsx from 'clsx';

export default (props) => {
  const {
    className,
    id = getIdFromTitle(props.label),
    label,
    type,
    placeholder,
    isRequired,
    inputMode,
    mask,
    isPhone = false,
    renderBefore,
  } = props;

  const Component = type === "textarea" ? "textarea" : "input";
  const extraAtters = {};


  if (mask) {
    extraAtters['data-js-input-mask'] = mask;
  }

  return (
    <div
      className={clsx(className, "field")}
    >
      <label className="field__label" htmlFor={id}>
        {label} {isRequired && (
          <span className="field__required-star" aria-hidden="true">*</span>
        )}
      </label>
      <div className="field__body">
        {renderBefore?.("field__control")}
        <Component
          className={isPhone ? "field__control field__control--phone" : "field__control"}
          id={id}
          type={type}
          placeholder={placeholder}
          required={isRequired}
          inputMode={inputMode}
          {...extraAtters}
        />
      </div>
    </div>
  );
};