
import './App.css';
import FooterVars from './workshop/Footer';
import FormVars from './workshop/Form';
import NavbarVars from './workshop/Navbar';

function App() {
  return (
    <div className="App">
     <NavbarVars/>
    <div className="container"><FormVars/></div> 
    <FooterVars/>
    </div>
  );
}

export default App;
