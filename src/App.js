import './App.css';
import logoFreeCodeCamp from "./img/freeCodeCamp.svg";
import Calculadora from "./components/Calculadora";

function App() {

  return (
    <div className="App">
      <div className='logo-freecodecamp-contenedor'>
        <img
          className='logo-freecodecamp'
          src={logoFreeCodeCamp}
          alt='logo-freecodecamp' />
      </div>
      <Calculadora />
    </div>
  );
}

export default App;
