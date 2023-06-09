import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Projects } from "./components/Projects"
import { Services } from "./components/Services"
import { Skills } from "./components/Skills"
import { About } from "./components/about"
import { Hero } from "./components/hero"
import "./index.css"


function App() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}

export default App