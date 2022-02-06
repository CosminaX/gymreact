
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Antrenamente from './components/Antrenamente';
import Nutritie from './components/Nutritie';


function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/">
         <Home/>
        </Route>
        <Route path="/Antrenamente">
         <Antrenamente/>
        </Route>
        <Route path="/Nutritie">
        <Nutritie/>
        </Route>
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
