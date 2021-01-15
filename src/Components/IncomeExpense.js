import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const Income = amounts
    .filter((a) => a > 0)
    .reduce((prev, a) => (prev = prev + a), 0)
    .toFixed(2);

  const Expense = amounts
    .filter((a) => {
      return a < 0;
    })
    .reduce((prev, a) => (prev = prev + a), 0)
    .toFixed(2);
  return (
    <>
      <div className="inc-exp-container">
        <div>
          <h4>{Income}</h4>
          <p className="money plus">+$0.00</p>
        </div>
        <div>
          <h4>{Expense}</h4>
          <p className="money minus">-$0.00</p>
        </div>
      </div>
    </>
  );
};
export default IncomeExpense;
