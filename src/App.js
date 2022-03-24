import './App.css';
import User from "./Components/User/User";

function App() {
  return (
    <div className="App">
      <User nombre={"Victor"} apellido={"Vasquez"} edad={23} color={"Black"}/>
      <User nombre={"Gringo"} apellido={"Karl"} edad={48} color={"Blonde"}/>
    </div>
  );
}

export default App;
