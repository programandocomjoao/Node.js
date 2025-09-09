import './App.css';
import Titulo from './Titulo';
import Entrada from './Entrada';
import Controles from './Controles';
import Saida from './Saida';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Titulo />
        <Entrada />
        <Controles />
        <Saida />
      </header>
    </div>
  );
}

export default App;
