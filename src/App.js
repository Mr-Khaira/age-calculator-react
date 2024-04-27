import { useState } from "react";
import "./App.css";
import FormComponent from "./components/FormComponent";
import LowerContainor from "./components/LowerContainor";

function App() {
  const dateToday = new Date().getDate(); // For calculaation of age
  const monthToday = new Date().getMonth() + 1; // For calculaation of age
  const yearToday = new Date().getFullYear();

  const [daysSinceBd, setDaySinceBd] = useState(0);
  const [monthSinceBd, setMonthSinceBd] = useState(0);
  const [yearSinceBd, setYearSinceBd] = useState(0);

  function onSub(date) {
    // Call the age calculation function.
    const theAge = age(date.day, date.month, date.year);
    if (theAge) {
      setDaySinceBd(theAge[0]);
      setMonthSinceBd(theAge[1]);
      setYearSinceBd(theAge[2]);
    }
  }

  return (
    <div className="App">
      <div className="containor">
        <FormComponent yearToday={yearToday} onSub={onSub}></FormComponent>
        <LowerContainor
          day={daysSinceBd}
          month={monthSinceBd}
          year={yearSinceBd}></LowerContainor>
      </div>
    </div>
  );
}
export default App;

// Create the age calculation function and then add it as the prop to the arrow line component and also move lower-component to other component.

function age(birthDay, birthMonth, birthYear) {
  let today = new Date();

  let currentDate = today.getDate();
  let currentMonth = today.getMonth() + 1;
  let currentYear = today.getFullYear();

  let yearsDiff = currentYear - birthYear;
  let monthDiff = currentMonth - birthMonth;
  let dayDiff = currentDate - birthDay;

  if (birthMonth > currentMonth) {
    monthDiff = 12 - birthMonth + currentMonth; // Remaning months of this year has to be added to the months until the birthday in the next year.
    yearsDiff--; // Birthday is not yet here so -1.
  }

  if (birthDay > currentDate) {
    monthDiff--; // NOT a complemete month, ie the dff is less than even 28.
    let daysInTheMonth = new Date(birthYear, birthMonth, 0).getDate();
    dayDiff = daysInTheMonth - birthDay + currentDate + 1; // Compensating 1 day.

    if (daysInTheMonth === 31) {
      dayDiff = daysInTheMonth - birthDay + currentDate;
    } else if (daysInTheMonth === 29) {
      dayDiff = daysInTheMonth - birthDay + currentDate + 2; // Compensating 2 days.
    }
  }

  return [dayDiff, monthDiff, yearsDiff];
}
