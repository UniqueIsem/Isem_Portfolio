import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, Person, Footer, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Person />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        {/*<Footer />*/}
      </div>
    </BrowserRouter>
  )
}

export default App
