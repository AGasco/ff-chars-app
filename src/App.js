import Games from "./components/Games";
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

      <div className="app__container">
        <Games />
      </div>
    </div>
  );
}

export default App;
