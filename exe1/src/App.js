import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
        Crie uma pasta
        </p>

        <p>
          Abra o terminal
        </p>

        <p>
          Rode o comando npm-create-app minha_pasta
        </p>
        <p>
          Iremos navegar através do terminal para dentro da pasta
        </p>
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
