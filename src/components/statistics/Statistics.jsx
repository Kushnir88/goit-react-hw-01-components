import css from './Statistics.module.css'
export function Statistics ({ title, stats })  {
    return (
      <section className={css.statistics}>
        {title && <h2>{title}</h2>}
        <ul className="stat-list">
          {stats.map(stat => (
            <li key={stat.id} className="item">
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    );
  };