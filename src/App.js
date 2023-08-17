import './App.css';
import { Homepage } from './Pages';
import { Header } from './components/Header';
import { Allroutes } from './routes/Allroutes';

function App() {
  return (
    <div className="App">
     <Header />
      <Allroutes />

    </div>
  );
}

export default App;
