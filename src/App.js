import "./App.css";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import ArrowIcon from "./icons/arrow-icon";

function App() {
  const [dayErrorState, setDayError] = useState(false);
  const [monthErrorState, setMonthError] = useState(false);
  const [yearErrorState, setYearError] = useState(false);

  const form = useForm(); // Remember we can have default values here.
  const { register, handleSubmit, watch, formState } = form;
  const { touchedFields } = formState;
  const watchDay = watch("day");
  const watchMonth = watch("month");
  const watchYear = watch("year");

  const dateToday = new Date().getDate(); // For calculaation of age
  const monthToday = new Date().getMonth() + 1; // For calculaation of age
  const yearToday = new Date().getFullYear();

  function onSub(obj) {
    // Call the age calculation function.
    console.log(obj);
  }

  // This use effect is further using the watch method of the
  // form object to
  useEffect(() => {
    const subscription = watch((value) => {
      if ([1, 3, 5, 7, 8, 10, 12].includes(value.month)) {
        if (value.day < 1 || value.day > 31) {
          setDayError(true);
        } else {
          setDayError(false);
        }
      }
      if ([4, 6, 9, 11].includes(value.month)) {
        if (value.day < 1 || value.day > 30) {
          setDayError(true);
        } else {
          setDayError(false);
        }
      }
      if ([2].includes(value.month)) {
        if (value.year % 4 === 0) {
          if (value.day < 1 || value.day > 29) {
            setDayError(true);
          } else {
            setDayError(false);
          }
        } else {
          if (value.day < 1 || value.day > 28) {
            setDayError(true);
          } else {
            setDayError(false);
          }
        }
      }

      if (value.month < 1 || value.month > 12) {
        setMonthError(true);
      } else {
        setMonthError(false);
      }

      if (value.year < 1000 || value.year > yearToday) {
        setYearError(true);
      } else {
        setYearError(false);
      }
    });

    return subscription.unsubscribe;
  }, [watchDay, watchMonth, watchYear]);

  return (
    <div className="App">
      <div className="containor">
        <form onSubmit={handleSubmit(onSub)} noValidate>
          <div className="containor-upper">
            <div>
              <label
                type="DMY"
                className={
                  (touchedFields.day && !watchDay) || dayErrorState
                    ? "redText"
                    : ""
                }>
                DAY
              </label>
              <br />
              <input
                className={
                  (touchedFields.day && !watchDay) || dayErrorState
                    ? "inputError"
                    : "inputNormal"
                }
                type="number"
                id="day"
                placeholder="DD"
                {...register("day", {
                  valueAsNumber: true,
                  min: {
                    value: 1,
                  },
                  max: {
                    value: 31,
                  },
                  required: "Day is required",
                })}
              />
              {touchedFields.day && !watchDay && (
                <p className="errorText redText">This field is required</p>
              )}
              {dayErrorState && (
                <p className={dayErrorState ? "errorText redText" : ""}>
                  Must be a valid day
                </p>
              )}
            </div>
            <div>
              <label
                type="DMY"
                className={
                  (touchedFields.month && !watchMonth) || monthErrorState
                    ? "redText"
                    : ""
                }>
                MONTH
              </label>
              <br />
              <input
                className={
                  (touchedFields.month && !watchMonth) || monthErrorState
                    ? "inputError"
                    : "inputNormal"
                }
                type="number"
                id="month"
                placeholder="MM"
                {...register("month", {
                  valueAsNumber: true,
                  required: true,
                  min: {
                    value: 1,
                  },
                  max: {
                    value: 12,
                  },
                })}
              />
              {touchedFields.month && !watchMonth && (
                <p className="errorText redText">This field is required</p>
              )}
              {monthErrorState && (
                <p className={monthErrorState ? "errorText redText" : ""}>
                  Must be a valid month
                </p>
              )}
            </div>
            <div>
              <label
                type="DMY"
                className={
                  (touchedFields.year && !watchYear) || yearErrorState
                    ? "redText"
                    : ""
                }>
                YEAR
              </label>
              <br />
              <input
                className={
                  (touchedFields.year && !watchYear) || yearErrorState
                    ? "inputError"
                    : "inputNormal"
                }
                type="number"
                id="year"
                placeholder="YYYY"
                {...register("year", {
                  valueAsNumber: true,
                  required: true,
                  min: {
                    value: 999,
                  },
                  max: {
                    value: yearToday,
                  },
                })}
              />
              {touchedFields.year && !watchYear && (
                <p className="errorText redText">This field is required</p>
              )}
              {yearErrorState && (
                <p className={yearErrorState ? "errorText redText" : ""}>
                  Must be a valid year
                </p>
              )}
            </div>
          </div>
          <div className="line-and-arrow">
            {/*The line and the arrow goes here */}
            <p className="line"></p>
            <button className="arrow">{<ArrowIcon></ArrowIcon>}</button>
          </div>
        </form>
        <div className="containor-lower">
          <div>
            <span>--{/*The year useState val */}</span>
            <span>{/*Year label */}year</span>
          </div>
          <div>
            <span>--{/*The month useState val */}</span>
            <span>{/*Month label */}month</span>
          </div>
          <div>
            <span>--{/*The day useState val */}</span>
            <span>{/*Day label */} day</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
