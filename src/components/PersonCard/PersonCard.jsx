import './PersonCard.scss';

export default (props) => {
  const {
    personCardData = [],
  } = props;

  return (
    <>
      {personCardData.map(({ name, department, href}, index) => (
        <article className="person-card" key={index}>
          <a className="person-card__link" href={href}>
            <div className="person-card__info">
              <svg viewBox="0 0 300 200" preserveAspectRatio="none">
                  <rect class="path" x="0" y="0" width="258" height="98" rx="0"/>
              </svg>
              <h3 className="person-card__name h4">{name}</h3>
              <span className="person-card__department">{department}</span>
            </div>
          </a>
        </article>
      ))}
    </>
  );
};