import "./styles.css";
import Expense from "./components/AddExpnce/Expense";
import Navbar from "./components/Navbar/Navbar";
import Display from "./components/Display/Display";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/add" element={<Expense />} />
        <Route path="/display" element={<Display />} />
      </Routes>
    </BrowserRouter>
  );
}
