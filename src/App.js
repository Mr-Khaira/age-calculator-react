import { useState } from "react";
import "./App.css";
import FormComponent from "./components/FormComponent";
import LowerContainor from "./components/LowerContainor";

function App() {
  const yearToday = new Date().getFullYear();

  const [daysSinceBd, setDaySinceBd] = useState(NaN);
  const [monthSinceBd, setMonthSinceBd] = useState(NaN);
  const [yearSinceBd, setYearSinceBd] = useState(NaN);

  function onSub(date) {
    // Call the age calculation function.
    const theAge = age(date.day, date.month, date.year);
    if (theAge) {
      setDaySinceBd(Math.abs(theAge[0]));
      setMonthSinceBd(Math.abs(theAge[1]));
      setYearSinceBd(Math.abs(theAge[2]));
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
      <h5>
        Discrepancies may exist due to divergence in unit of days per months
      </h5>
    </div>
  );
}
export default App;

function age(birthDay, birthMonth, birthYear) {
  let today = new Date();

  let currentDate = today.getDate();
  let currentMonth = today.getMonth() + 1;
  let currentYear = today.getFullYear();

  let yearsDiffInclusive = currentYear - birthYear - 1;
  let noOfLeaps = (yearsDiffInclusive % 4) + 1;
  let daysWithinYears = yearsDiffInclusive * 365 + noOfLeaps;

  let daysInByear = 0;
  let daysInCurrYear = 0;

  if (
    (currentYear % 4 === 0 && currentYear % 100 !== 0) ||
    currentYear % 400 === 0
  ) {
    daysInCurrYear =
      366 - noOfDaysInThisYr(currentDate, currentMonth, currentYear);
  } else {
    daysInCurrYear =
      365 - noOfDaysInThisYr(currentDate, currentMonth, currentYear);
  }
  daysInByear = noOfDaysInThisYr(birthDay, birthMonth, birthYear);

  let totalDays = daysWithinYears + daysInCurrYear + daysInByear;

  return daysToDMY(totalDays);
}

function noOfDaysInThisYr(birthDay, birthMonth, birthYear) {
  let remaningDays = birthDay;

  for (let i = birthMonth - 1; i > 0; i--) {
    if ([1, 3, 5, 7, 8, 10, 12].includes(i)) {
      remaningDays = remaningDays + 31;
    }
    if ([4, 6, 9, 11].includes(i)) {
      remaningDays = remaningDays + 30;
    }
    if ([2].includes(i)) {
      if (
        (birthYear % 4 === 0 && birthYear % 100 !== 0) ||
        birthYear % 400 === 0
      ) {
        remaningDays = remaningDays + 29;
      } else {
        remaningDays = remaningDays + 28;
      }
    }
  }

  if ((birthYear % 4 === 0 && birthYear % 100 !== 0) || birthYear % 400 === 0) {
    return 366 - remaningDays;
  } else {
    return 365 - remaningDays;
  }
}

function daysToDMY(days) {
  const months = days / 30.4375;
  const years = months / 11.99953;

  const actualYears = Math.floor(years);
  const actualMonths = Math.floor((years - Math.floor(years)) * 11.99953);
  const actualDays = Math.floor((months - Math.floor(months)) * 30.4375);

  return [actualDays, actualMonths, actualYears];
}
