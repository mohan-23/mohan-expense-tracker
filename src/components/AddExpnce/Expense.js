import React from "react";
import { useState } from "react";

export const Store = React.createContext();

const Expense = () => {
  const [data, setData] = useState({
    description: "",
    amount: "",
    date: "",
  });
  const inputHandlers = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <Store.Provider value={data}>
        Input Form
        <form onSubmit={submitHandler}>
          <p>Description</p>
          <input
            type="text"
            onChange={inputHandlers}
            name="description"
            value={data.description}
          />
          <p>Amount</p>
          <input
            type="text"
            onChange={inputHandlers}
            name="amount"
            value={data.amount}
          />
          <p>Date</p>
          <input
            type="date"
            onChange={inputHandlers}
            name="date"
            value={data.date}
          />
          <br />
          <input type="submit" />
        </form>
      </Store.Provider>
    </div>
  );
};

export default Expense;
