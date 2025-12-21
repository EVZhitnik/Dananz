import './Results.scss';
import clsx from 'clsx';

export default (props) => {
  const {
    className,
  } = props;

  const resultsDatat = [
    {
      value: '350+',
      title: 'Project Completed',
    },
    {
      value: '23+',
      title: 'Professional Teams',
    },
    {
      value: '15+',
      title: 'Years Experience',
    },
  ];

  return (
    <div className={clsx(className, 'results')}>
      <ul className="results__list">
        {resultsDatat.map(({ value, title }, index) => (
          <li className="results__item" key={index}>
            <span className="results__value">{value}</span>
            <span className="results__title">{title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};