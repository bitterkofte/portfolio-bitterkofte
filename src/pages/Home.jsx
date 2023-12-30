import AboutSection from "../components/Home/AboutSection"
import MoreSection from "../components/Home/MoreSection"
import ProjectSection from "../components/Home/ProjectSection"
import SectionContainer from "../components/Home/SectionContainer"

const Home = () => {
  return (
    <div className="">
      {/* <p>Home</p> */}
      <SectionContainer title={"About Me"} child={<AboutSection />} />
      <SectionContainer title={"My Projects"} child={<ProjectSection />} />
      <SectionContainer title={"More"} child={<MoreSection />} noSS/>
      
      {/* SECTION desktop - vertical bar */}
      {/* SECTION mobile - horizontal bar */}
    </div>
  )
}
export default Home