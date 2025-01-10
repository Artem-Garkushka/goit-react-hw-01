import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.tableHead}>
        <tr>
          <th className={css.headItem}>Type</th>
          <th className={css.headItem}>Amount</th>
          <th className={css.headItem}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.tableBody}>
        {items.map((trans) => {
          return (
            <tr key={trans.id} className={css.row}>
              <td className={css.type}>{trans.type}</td>
              <td className={css.amount}>{trans.amount}</td>
              <td className={css.currency}>{trans.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
