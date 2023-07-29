import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Projects } from "./components/Projects"
import { Services } from "./components/Services"
import { Skills } from "./components/Skills"
import { About } from "./components/About"
import { Hero } from "./components/Hero"
import "./index.css"


function App() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App