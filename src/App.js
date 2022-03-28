import './styles/App.css';
import './styles/Breakouts.css';
import './styles/Variables.css';
import 'normalize.css';
// import bgPattern from './images/bg-pattern.svg';
import HeaderComponent from './layouts/Header';
import MainComponent from './layouts/Main';
import Footer from './layouts/Footer';
import { myInfo } from './utils/myInfo';



function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <MainComponent />
      <Footer
        myInfo={myInfo}
      />
    </div>
  );
}

export default App;
