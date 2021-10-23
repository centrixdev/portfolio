
import { useEffect, useRef } from "react";
import Contact from "./containers/Contact";
import Hero from "./containers/Hero";
import Skills from "./containers/Skills";
import Work from "./containers/Work";

import { gsap, Power3 } from "gsap";

function App() {

  var content = useRef(null)

  useEffect(() => {
    gsap.from(content, {
      duration: 1,
      opacity: 0,
      delay: 3,
      ease: Power3.easeOut
    })
  }, [])

  return (
    <div className="App">
      <Hero />
      <div
        ref={e => {content = e}}>
        <Work />
        <div className="container">
          <Contact />
          <Skills/>
        </div>
      </div>

    </div>
  );
}

export default App;
