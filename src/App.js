import logo from "./logo.svg";
import "./App.css";
import CustomList from "./components/CustomList";

function App() {
  const array1 = ["apple", "banana", "orange"];
  return (
    <div className="App">
      <ul>
        {array1.map((v) => {
          return <CustomList text={v}></CustomList>;
        })}
      </ul>
    </div>
  );
}

export default App;
