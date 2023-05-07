import "./ExpenseDate.css";


// Komponenta prima jedan props objekt koji sadrži datum za koji se prikazuje trošak.
// Ova komponenta koristi JavaScript Date objekt za obradu datuma i formatira ga pomoću toLocaleString
// metode kako bi se dobio mjesec, dan i godina u željenom formatu.

// ova komponenta se izvozi i može se koristiti u drugim dijelovima aplikacije gdje se želi prikazati datum troška.

const ExpenseDate = (props) => {

    const month = props.date.toLocaleString("en-US", {month: "long" });
    const day = props.date.toLocaleString("en-US", { day: "2-digit"});
    const year = props.date.getFullYear();

    return (
    <div className="expense-date">
    <div className="expense-date__month">{month} </div>
    <div className="expense-date__year">{year}</div>
    <div className="expense-date__day">{day}</div>
    </div>
    )

}

export default ExpenseDate;