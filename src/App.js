import "./App.css";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useEffect } from "react";

function App() {
  const form = useForm({
    defaultValues: {
      day: 1,
      month: 1,
      year: new Date().getFullYear(),
    },
  });
  const { register, control, handleSubmit, watch } = form;
  // const { errors } = formState;
  const watchDay = watch("day");
  const watchMonth = watch("month");
  const watchYear = watch("year");

  const dateToday = new Date().getDate();
  const monthToday = new Date().getMonth() + 1;
  const yearToday = new Date().getFullYear();
  console.log("date - ", dateToday);
  console.log("month - ", monthToday);
  console.log("year - ", yearToday);

  function onSub(obj) {
    // Call the age calculation function.
    console.log("dodod");
    console.log(obj);
  }

  useEffect(() => {
    const subscription = watch((value) => {
      console.log(value);
    });
    return subscription.unsubscribe;
  }, [watchDay, watchMonth, watchYear]);

  return (
    <div className="App">
      <div className="containor">
        <form onSubmit={handleSubmit(onSub)} noValidate>
          <div className="containor-upper">
            <div>
              <label type="DMY">DAY</label>
              <br />
              <input
                type="number"
                id="day"
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
            </div>
            <div>
              <label type="DMY">MONTH</label>
              <br />
              <input
                type="number"
                id="month"
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
            </div>
            <div>
              <label type="DMY">YEAR</label>
              <br />
              <input
                type="number"
                id="year"
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
            </div>
          </div>
          <div className="line-and-arrow">
            {/*The line and the arrow goes here */}
            <p className="line"></p>
            <button className="arrow">{">"}</button>
          </div>
        </form>
        <div className="containor-lower">
          <div>
            <span>--{/*The day useState val */}</span>
            <span>{/*Day label */} day</span>
          </div>
          <div>
            <span>--{/*The month useState val */}</span>
            <span>{/*Month label */}month</span>
          </div>
          <div>
            <span>--{/*The year useState val */}</span>
            <span>{/*Year label */}year</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit(onSub)} noValidate>
//         <div className="DMY-flex-upper-containor">
//           <h1>Day - {watchDay}</h1>
//           <div>
//             <label type="DMY">DAY</label>
//             <br />
//             <input
//               type="number"
//               id="day"
//               {...register("day", {
//                 valueAsNumber: true,
//                 min: {
//                   value: 1,
//                   // message: "Must be a valid date",
//                 },
//                 max: {
//                   value: 31,
//                   // message: "Must be a valid date",
//                 },
//                 required: "Day is required",
//                 // message: "Must be between 1 to 31",
//               })}
//             />
//             <p>{errors.day?.message}</p>
//           </div>
//           <div>
//             <label type="DMY">MONTH</label>
//             <br />
//             <input
//               type="number"
//               id="month"
//               {...register("month", {
//                 valueAsNumber: true,
//                 required: true,
//                 min: {
//                   value: 1,
//                   // message: "Must be a valid month",
//                 },
//                 max: {
//                   value: 12,
//                   // message: "Must be a valid month",
//                   // Add the watch.
//                 },
//                 // message: "Should be between 1 to 12",
//               })}
//             />
//             <p>{errors.month?.message}</p>
//           </div>
//           <div>
//             <label type="DMY">YEAR</label>
//             <br />
//             <input
//               type="text"
//               id="year"
//               {...register("year", {
//                 required: true,
//                 pattern: {
//                   value: /[12][0-9][0-9][0-9]/,
//                   // This is yet a text solve this matter
//                   // message: "Not a valid year",
//                 },
//               })}
//             />
//             <p>{errors.year?.message}</p>
//           </div>
//         </div>
//         <div>
//           {/*The line and the arrow goes here */}
//           <hr />
//           <button>arrow</button>
//         </div>
//       </form>
//       <DevTool control={control} />
//       <div className="DMY-display-lower-containor">
//         <div>
//           <span>--{/*The day useState val */}</span>
//           <span>{/*Day label */} day</span>
//         </div>
//         <div>
//           <span>--{/*The month useState val */}</span>
//           <span>{/*Month label */}month</span>
//         </div>
//         <div>
//           <span>--{/*The year useState val */}</span>
//           <span>{/*Year label */}year</span>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default App;
