import css from './Statistics.module.css';
import { StatsList } from './StatsList';

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title.length > 0 && <h2 className={css.title}>{title}</h2>}
      <ul className={css.stat}>
        {stats?.map(stat => {
          return (
            <StatsList
              label={stat.label}
              percentage={stat.percentage}
              key={stat.id}
            />
          );
        })}
      </ul>
    </section>
  );
};

export { Statistics };
