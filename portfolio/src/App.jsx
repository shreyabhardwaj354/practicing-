import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Learning from "./Learning.jsx";
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
      </div>
    </>
  );
}

export default App;
