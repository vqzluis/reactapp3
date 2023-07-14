import logo from './logo.svg';
import './App.css';
import C01componente from './component/C01componente';
import C02contador from './component/C02contador';

function App() {
  return (
    <div >
      <h1>componente 1</h1>
      <C01componente></C01componente>

      <h1>componente 2</h1>
      <C02contador></C02contador>
    </div>
  );
}

export default App;
