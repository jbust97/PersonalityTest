import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
function Home(){
  return (
    <div>
      Home
    </div>
  )
}

function NewForm(){
  return (
    <div>
      Nuevo Form
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router basename={process.env.PUBLIC_URL}>
          <ul>
            <li>
              <Link to ="/">Inicio</Link>
            </li>
            <li>
              <Link to ="/nuevo">Crear Test</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path = "/">
              <Home/>
            </Route>
            <Route path = "/nuevo">
              <NewForm/>
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
