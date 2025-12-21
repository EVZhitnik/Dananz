import clsx from 'clsx';
import './Socials.scss';
import Button from '@/components/Button';

export default (props) => {
  const {
    className,
    links = [],
  } = props;

  return (
    <div className={clsx(className, 'soc1als')}>
      <ul className="soc1als__list">
        {links.map(({ label, iconName }, index) => (
          <li className="soc1als__item" key={index}>
            <Button
              className="soc1als__link"
              mode="soc1als" 
              href="./"
              target="_blank"
              label={label}
              isLabelHidden
              iconName={iconName}
              hasFillIcon
            />
          </li>
        ))}
      </ul>
    </div>
  );
};