import "./App.css";
import Calculator from "./components/Calculator";

function App() {
  const year = new Date().getFullYear();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenido a mi calculadora React</h1>
      </header>
      <main>
        <Calculator />
      </main>
      <footer>
        <p>© { year } Markuladora</p>
      </footer>
    </div>
  );
}

export default App;