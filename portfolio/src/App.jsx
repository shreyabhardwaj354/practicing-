import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
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
      </div>
    </>
  );
}

export default App;
