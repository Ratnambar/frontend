import './App.css';
import Form from './Register.js'
import Listusers from './Listusers';
import Login from './Login';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
        <Link to="">Listusers</Link>
        <Link to="/signup">Form</Link>
        <Link to="/login">Login</Link>
        
        
        <Route exact path="/" component={Listusers}></Route>
        <Route path="/signup" component={Form}></Route>
        <Route path="/login" component={Login}></Route>
      </Router>
    </div>
  );
}

export default App;
