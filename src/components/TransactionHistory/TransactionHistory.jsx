import css from './TransactionHistory.module.css';
import { TransactionItem } from './TransactionItem';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transaction}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(item => (
        <TransactionItem
          type={item.type}
          amount={item.amount}
          currency={item.currency}
          key={item.id}
        />
      ))}
    </table>
  );
};

export { TransactionHistory };
