import "./App.css";
import FormCmoponent from "./components/FormCmoponent";

function App() {
  const dateToday = new Date().getDate(); // For calculaation of age
  const monthToday = new Date().getMonth() + 1; // For calculaation of age
  const yearToday = new Date().getFullYear();

  function onSub(obj) {
    // Call the age calculation function.
    console.log(obj);
  }

  return (
    <div className="App">
      <div className="containor">
        <FormCmoponent yearToday={yearToday} onSub={onSub}></FormCmoponent>
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

// Distribute the whole jsx into different conponents.
