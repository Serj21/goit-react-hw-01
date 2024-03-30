import PropTypes from "prop-types";
import s from "./TransactionHistory.module.css";
import clsx from "clsx";

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.table}>
      <thead>
        <tr className={s.header_table}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((transactions) => (
          <tr
            key={transactions.id}
            className={clsx({
              [s.payment]: transactions.type === "Payment",
              [s.withdrawal]: transactions.type === "Withdrawal",
              [s.invoice]: transactions.type === "Invoice",
              [s.deposit]: transactions.type === "Deposit",
            })}
          >
            <td className={s.cell}>{transactions.type}</td>
            <td className={s.cell}>{transactions.amount}</td>
            <td className={s.cell}>{transactions.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
export default TransactionHistory;
