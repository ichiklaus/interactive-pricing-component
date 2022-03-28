import './styles/App.css';
import './styles/Breakouts.css';
import './styles/Variables.css';
import 'normalize.css';
import HeaderComponent from './layouts/Header';
import MainComponent from './layouts/Main';



function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <MainComponent />
    </div>
  );
}

export default App;
