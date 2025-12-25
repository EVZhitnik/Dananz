import clsx from 'clsx';
import './Form.scss';
import Field from '@/components/Field';
import Select from '@/components/Select';

export default (props) => {
  const {
    className,
  } = props;

  return (
    <form className={clsx(className, "form")}>
      <Field
        className="form__cell"
        label="First Name"
        placeholder="Alex"
        isRequired
      />
      <Field 
        className="form__cell"
        label="Last Name"
        placeholder="Abramson"                  
      />
      <Field 
        className="form__cell form__cell--wide"
        label="Email"
        type="email"
        placeholder="example@example.com"
        isRequired                        
      />
      <Field 
        className="form__cell form__cell--wide"
        label="Phone Number"
        type="email"
        placeholder="(999) 999 99-99"
        inputMode="tel"
        mask="(000) 000-00-00"
        isPhone
        renderBefore={(buttonClassName) => (
          <Select 
            label="Country name prefix"
            buttonClassName={buttonClassName}
            options={[
              { value: "US", isSelected: true},
              { value: "RU"},
              { value: "AV"},
              { value: "NI"},
            ]}
          />
        )}                      
      />
      <Field 
        className="form__cell form__cell--wide"
        label="Message"
        type="textarea"
        placeholder="Hi! I have question..."
        isRequired
      />
    </form>
  );
};