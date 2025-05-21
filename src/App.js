import logo from "./logo.svg";
import "./App.css";
import CustomList from "./components/CustomList";
import Button from "./components/Button";

function App() {
  const array1 = ["apple", "banana", "orange"];
  return (
    <div className="App">
      <Button></Button>
      <ul>
        {array1.map((value, index) => {
          return <CustomList text={`${index} ${value}`}></CustomList>;
        })}
      </ul>
    </div>
  );
}

export default App;
