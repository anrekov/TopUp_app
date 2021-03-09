import './App.css';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Main from './components/Main';
import Deposit from './components/Deposit';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/deposit/:operator' component={Deposit} />

        <Redirect to='/' />
      </Switch>
    </Router>
  );
};

export default App;
