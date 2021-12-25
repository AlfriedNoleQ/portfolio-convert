import './App.css';
import Footer from './components/Footer/Footer';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import Home from './views/Home/Home';
import Skills from './views/Skills/Skills';
import Work from './views/Work/Work';
import NavBar from './components/NavBar/NavBar'
import GoToTop from './components/GoToTop/GoToTop';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    function scrollActive(){
        const scrollY = window.pageYOffset

        sections.forEach(current =>{
            const sectionHeight = current.offsetHeight
            const sectionTop = current.offsetTop - 50;
            let sectionId = current.getAttribute('id')

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
            }else{
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
            }
        })
    }
    window.addEventListener('scroll', scrollActive)
    
    return () => window.removeEventListener('scroll', scrollActive)
  }, [])

  return (
    <div className="App">
      <NavBar />
      <main className="l-main">
        
          <Home />
        
          <About />
        
          <Skills />
        
          <Work />
        
          <Contact />
        
      </main>
      <GoToTop />
      <Footer />
    </div>
  );
}

export default App;
