import "./App.css";
import Medications from "./containers/Medications";
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
          {/* <Route exact path="/medications" component={Medications} /> */}
          <Route
            path="/medications"
            render={(routerProps) => <Medications {...routerProps} />}
          />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
