import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import BootstrapNavbar from "./components/BootstrapNavbar";
import Contactus from "./components/Contactus";
import Predictor from "./components/Predictor";
import ScrollBar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";




function App() {
  return (
    <div>
    <ScrollBar component="div">
    <Router>
      <BootstrapNavbar />
      
     
      
      
      <Route exact path="/">
        <Predictor />
      </Route>

      <Route path="/Contactus" component={Contactus} />
      <Route path="/Aboutus" component={Aboutus} />
      <Route path="/Predictor" component={Predictor} />
    
    {/* < Footer /> */}
    </Router>
    </ScrollBar>
    </div>
  );
}

export default App;
