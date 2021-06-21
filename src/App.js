import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import BootstrapNavbar from "./components/BootstrapNavbar";
import Contactus from "./components/Contactus";
import Predictor from "./components/Predictor";
import ScrollBar from "react-perfect-scrollbar";
import LoginButton from "./components/LoginButton";
import Login from "./components/login";
import "react-perfect-scrollbar/dist/css/styles.css";




function App() {
  return (
    <div>
    <ScrollBar component="div">
    <Router>
      <BootstrapNavbar />
      
      <LoginButton />
      
      <Route exact path="/Login">
        <Login />
      </Route>
    {/* <Login /> */}
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
