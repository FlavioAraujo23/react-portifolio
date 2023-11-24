import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Projects } from "./components/Projects"
import { Services } from "./components/Services"
import { Skills } from "./components/Skills"
import { About } from "./components/About"
import { Hero } from "./components/Hero"
import "./index.css"
import { BrowserRouter} from "react-router-dom"


function App() {
  return (
    <>
    <BrowserRouter>
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
    </BrowserRouter>
      
    </>
  )
}

export default App