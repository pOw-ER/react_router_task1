import { Switch, Route } from 'react-router-dom'
import './App.css';
import Galerie from './components/Galerie';
import Home from './components/Home';
import Kontakt from './components/Kontakt';
import SpeiseKarte from './components/SpeiseKarte'
import Öffnungszeiten from './components/Öffnungszeiten';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/speisekarte">
          <SpeiseKarte />
        </Route>
        <Route path="/kontakt">
          <Kontakt />
        </Route>
        <Route path="/öffnungszeiten">
          <Öffnungszeiten />
        </Route>
        <Route path="/galerie">
          <Galerie />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
