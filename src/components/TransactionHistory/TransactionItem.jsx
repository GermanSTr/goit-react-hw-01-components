import css from './TransactionHistory.module.css';

const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tbody>
      <tr className={css.line}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </tbody>
  );
};

export { TransactionItem };
