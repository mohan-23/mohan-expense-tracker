import React, { useContext } from "react";
import { Store } from "./components/AddExpnce/Expense";

const Display = () => {
  let data = useContext(Store);
  console.log(data);
  return <div>Hello</div>;
};

export default Display;
