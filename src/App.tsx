import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { PageTransition, SmoothScroll } from "./components/PageTransition";
import "./index.css";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <PageTransition>
      <SmoothScroll>
        <main>
          <Hero />
          <About />
          <Services />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <footer>
          <Footer />
        </footer>
        <Analytics />
      </SmoothScroll>
    </PageTransition>
  );
}

export default App;
