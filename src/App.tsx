import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Projects } from "./components/Projects"
import { Services } from "./components/Services"
import { Skills } from "./components/Skills"
import { About } from "./components/About"
import { Hero } from "./components/Hero"
import "./index.css"
import { BrowserRouter} from "react-router-dom"
import MenuMobile from "./components/Menu"
import { Analytics } from '@vercel/analytics/react';


function App() {
  return (
    <>
    <BrowserRouter>
      <main>
        <Hero />
        <MenuMobile />
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