import "./App.css";
import Medications from "./containers/Medications";
import NewMedicationForm from "./containers/NewMedicationForm";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Logo from "./components/Logo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Logo />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/medications" component={Medications} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
