import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Heading from "./components/Heading";
import Projets from "./components/Projets";
import Skills from "./components/Skills";
import Formations from "./components/Formations";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Heading anchor="projets">Mes projets</Heading>
      <Projets />
      <Heading anchor="compétences">Mes compétences</Heading>
      <Skills />
      <Heading anchor="formations">Mes Formations</Heading>
      <Formations />
      <Footer />
    </>
  );
}

export default App;
