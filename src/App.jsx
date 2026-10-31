import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Manifesto from './components/Manifesto.jsx'
import Questions from './components/Questions.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <div className="wrap">
          <Hero />
          <About />
          <Manifesto />
          <Questions />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  )
}
