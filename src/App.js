import './App.css';
import Footer from './components/Footer/Footer';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import Home from './views/Home/Home';
import Skills from './views/Skills/Skills';
import Work from './views/Work/Work';
import NavBar from './components/NavBar/NavBar'
import ScrollReveal from './ultis/ScrollReveal';
import GoToTop from './components/GoToTop/GoToTop';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="l-main">
        <ScrollReveal>
          <Home />
        </ScrollReveal>
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal>
          <Skills />
        </ScrollReveal>
        <ScrollReveal>
          <Work />
        </ScrollReveal>
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>
      <GoToTop />
      <Footer />
    </div>
  );
}

export default App;
