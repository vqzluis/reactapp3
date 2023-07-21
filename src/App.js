import logo from './logo.svg';
import './App.css';
import C01componente from './component/C01componente';
import C02contador from './component/C02contador';
import C03dobleestado from './component/C03dobleestado';
import C04variable from './component/C04variable';

function App() {
  return (
    <div >
      <h1>componente 1</h1>
      <C01componente></C01componente>

      <h1>componente 2</h1>
      <C02contador></C02contador>

      <h1>componente 3</h1>
      <C03dobleestado></C03dobleestado>

      <h1>componente 4</h1>
      <C04variable></C04variable>
    </div>
  );
}

export default App;
