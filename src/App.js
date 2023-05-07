import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";



const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },

  { id: "e2", 
  title: "New TV", 
  amount: 799.49, 
  date: new Date(2021, 2, 12) },

  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },   
];


const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  const addExpenseHandler= expense => {
    setExpenses(prevExpenses => {
      return[expense, ...prevExpenses];
    })
  }

  return (

    <div className="App">
      <header className="App-header">
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses items={expenses} />
               
      </header>
    </div>
  );
}

export default App;




// Ovaj kod je React aplikacija koja prikazuje liste troškova
// i ima formu za dodavanje novih troškova.
// Aplikacija je podijeljena u nekoliko dijelova, svaki sa svojom funkcijom.


// U glavnoj komponenti (App.js) se nalaze dvije komponente: Expenses i NewExpense.
// Expenses komponenta prikazuje postojeće troškove, 
// NewExpense komponenta prikazuje formu za dodavanje novih troškova.


// Komponenta Card.js predstavlja prikazivanje kartice sa sadržajem.

// NewExpense.js   se nalazi forma za dodavanje novih troškova.
// Kada korisnik unese podatke u formu i klikne gumb, 
// saveExpenseDataHandler funkcija se poziva i stvara se novi objekt expenseData
// koji se proslijeđuje funkciji addExpenseHandler koja se nalazi u glavnoj komponenti (App.js).


// ExpenseForm.js prikazuje formu za unos podataka.
// Uneseni podaci se spremaju u state pomoću React-ove useState kuke
// nakon klika na gumb submit, podaci se proslijeđuju gore navedenoj funkciji za spremanje podataka.


// Expenses.js prikazuje sve postojeće troškove
// koji se proslijeđuju kao props.


//ExpenseItem.js prikazuje pojedinačni trošak.


// Ukratko, aplikacija prikazuje postojeće troškove
// i ima formu za dodavanje novih troškova koji se pohranjuju u state.