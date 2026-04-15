import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';

export default function Hello() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

