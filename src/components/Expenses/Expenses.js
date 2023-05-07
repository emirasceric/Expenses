import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter.js";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

// Expenses.js prikazuje sve postojeće troškove
// koji se proslijeđuju kao props.

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    if (filteredYear === "all") {
        return true; // Vrati sve troškove ako je odabrano "All Expenses"
    } else {
      return expense.date.getFullYear().toString() === filteredYear;
    }
  });
 

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        
        <ExpensesList items={filteredExpenses} />
        <ExpensesChart expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
