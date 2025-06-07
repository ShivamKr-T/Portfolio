import NavBar from "./components/NavBar"
import { Achievements } from "./sections/Achievements"
import Contact from "./sections/Contact"
import ExperienceSection from "./sections/ExperienceSection"
import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import TechStack from "./sections/TechStack"

const App = () => {
  return (
    <>
      <NavBar/>
      <Hero/>
      <ShowcaseSection/>
      <ExperienceSection/>
      <TechStack/>
      <Achievements/>
      <Contact/>
    </>
  )
}

export default App