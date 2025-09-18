import './App.css';
import Titulo from './Titulo';
import Telas from './Telas';
import Controle from './Controle';
import Start from './Start';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Titulo />
        <Telas />
        <Controle />
        <Start />
      </header>
    </div>
  );
}

export default App;
