import "./App.css";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

function App() {
  const form = useForm({ defaultValues: {} });
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  function onSub(obj) {
    console.log("dodod");
    console.log({ obj });
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSub)} noValidate>
        <div className="DMY-flex-upper-containor">
          <div>
            <label type="DMY">DAY</label>
            <br />
            <input
              type="number"
              id="day"
              {...register("day", {
                min: {
                  value: 1,
                  message: "Must be a valid date",
                },
                max: {
                  value: 31,
                  message: "Must be a valid date",
                },
                required: "Day is required",
                message: "Must be between 1 to 31",
              })}
            />
            <p>{errors.day?.message}</p>
          </div>
          <div>
            <label type="DMY">MONTH</label>
            <br />
            <input
              type="number"
              id="month"
              {...register("month", {
                required: "Month is required",
                min: {
                  value: 1,
                  message: "Must be a valid month",
                },
                max: {
                  value: 12,
                  message: "Must be a valid month",
                },
                message: "Should be between 1 to 12",
              })}
            />
            <p>{errors.month?.message}</p>
          </div>
          <div>
            <label type="DMY">YEAR</label>
            <br />
            <input
              type="number"
              id="year"
              {...register("year", {
                required: "Year is required",
                pattern: {
                  value: /[12][0-9][0-9][0-9]/,
                  message: "There should be 4 digits",
                },
              })}
            />
            <p>{errors.year?.message}</p>
          </div>
        </div>
        <div>
          {/*The line and the arrow goes here */}
          <hr />
          <button>arrow</button>
        </div>
      </form>
      <DevTool control={control} />
      <div className="DMY-display-lower-containor">
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
  );
}
export default App;
