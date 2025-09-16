import './App.css';
import Titulo from './Titulo';
import Tela from './Tela';
import Controle from './Controle';
import Start from './Start';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Titulo />
        <Tela />
        <Controle />
        <Start />
      </header>
    </div>
  );
}

export default App;
