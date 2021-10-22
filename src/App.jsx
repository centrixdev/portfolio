
import Contact from "./containers/Contact";
import Hero from "./containers/Hero";
import Skills from "./containers/Skills";
import Work from "./containers/Work";


function App() {

  return (
    <div className="App">
      <Hero />
      <Work />
      <div className="container">
        <Contact />
        <Skills/>
      </div>
    </div>
  );
}

export default App;
