import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Hero } from "./components/Hero";
import "./index.css";
import { Analytics } from "@vercel/analytics/react";
import { MaintenancePage } from "./components/MaintenancePage";
import { Experience } from "./components/Experience";

function App() {
  const isMaintenanceMode = false;

  if (isMaintenanceMode) {
    return <MaintenancePage />;
  }

  return (
    <>
      <main>
        <Hero />
        <About />
        <Experience />
        <Services />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
      <Analytics />
    </>
  );
}

export default App;
