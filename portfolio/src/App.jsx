import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Learning from "./Learning.jsx";
import Contact from "./Contact.jsx";
import Fotter from "./Footer.jsx";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <section id="/">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="learning">
          <Learning />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Fotter />
      </div>
    </>
  );
}

export default App;
