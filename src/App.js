import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Counter from './Pages/Counter';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/home' component={Home}  />
        <Route path='/profile' component={Profile} />
        <Route path='/counter' component={Counter} />
      </Router>
    </div>
  );
}

export default App;
