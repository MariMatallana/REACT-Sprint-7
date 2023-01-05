import './App.css';
import Formulario from './Components/Formulario';
import Inicio from './Components/Inicio';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {


  return (
    <Router>
      <div className="container mt-5">
        <h3>Calcula tu presupesto</h3>
        <div className="btn-group mt-5"></div>
        <Link to="/" className="btn btn-warning btn-sm" activeClassName="active">Inicio</Link>
        <Link to="/presupuesto" className="btn btn-warning btn-sm ms-2">Empezar</Link>
        <hr />
        <Routes>
          <Route path='/presupuesto' element={<Formulario/>}>
          </Route>
          <Route path='/' element={<Inicio/>}>
          </Route>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
