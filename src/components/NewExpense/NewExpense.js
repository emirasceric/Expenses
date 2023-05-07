import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

// NewExpense.js   se nalazi forma za dodavanje novih troškova.
// Kada korisnik unese podatke u formu i klikne gumb, 
// saveExpenseDataHandler funkcija se poziva i stvara se novi objekt expenseData
// koji se proslijeđuje funkciji addExpenseHandler koja se nalazi u glavnoj komponenti (App.js).


const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false); 

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };
  const startEditingHandler =()=>{
    setIsEditing(true);
  }

  const stopEditingHandler =()=>{
    setIsEditing(false);
  }
  return (
    <div className="new-expense">

      {!isEditing && <button onClick={startEditingHandler}> Add new expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} 
      onCancel={stopEditingHandler} />}
    </div>
  );
};
export default NewExpense;
