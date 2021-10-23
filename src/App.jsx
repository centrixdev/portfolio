import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Datenschutz from "./containers/Datenschutz";
import Footer from "./containers/Footer";
import Home from "./containers/Home";
import Impressum from "./containers/Impressum";

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/impressum" exact component={Impressum} />
          <Route path="/datenschutz" exact component={Datenschutz} />
          <Route path="/" component={Home}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
