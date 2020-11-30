import Games from "./components/Games";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__logoContainer">
        <h4 className="app__loveLetter">my love letter to </h4>
        <img
          className="app__logo"
          src="https://compass-ssl.xbox.com/assets/c9/c0/c9c01b9d-f780-4162-9b24-0a3dce79d148.png?n=Final-Fantasy-Franchise_Logo-0_672x129.png"
          alt="Final Fantasy Logo"
        />
      </div>

      <Navbar />

      <div className="app__container">
        {/* <Switch>
          <Route path="/games" component={Games} />
        </Switch> */}
        <Games />
      </div>
    </div>
  );
}

export default App;
