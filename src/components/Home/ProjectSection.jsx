import ProjectCard from "./ProjectCard";
import { projects } from "../../../data/projects";
import { FaArrowRight } from "react-icons/fa6";
import { Tooltip } from "react-tooltip";

const ProjectSection = () => {
  return (
    <div className="">
      <p className="mb-5 dark:text-neutral-200 duration-500">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>
      <div className="relative flex d-lg:justify-center u-xl:justify-between items-center flex-wrap gap-4">
        {projects.slice(0,5).map(p => (
          <ProjectCard key={p.id} title={p.name} desc={p.desc} tools={p.tools}/>
        ))}
        <div className="absolute w-96 h-full u-lg:right-0 u-lg:top-0 d-lg:w-full d-lg:h-52 d-lg:bottom-0 d-lg:left-0 flex d-lg:flex-col justify-end items-center bg-gradient-to-r from-transparent to-sky-700 d-lg:bg-gradient-to-b rounded-r-xl d-lg:rounded-b-xl select-none">
          <button className="w-20 h-10 bg-red-400 u-lg:mr-5 d-lg:mb-5  flex justify-center items-center gap-2 rounded-full"><p className="font-semibold">More</p><FaArrowRight/></button>
          {/* <button className="w-10 h-10 absolute top-1/2 right-0 bg-red-400">+</button> */}
        </div>
      </div>
      <Tooltip id="tools" style={{backdropFilter: 'blur(20px)', background: '#ffffff55', borderRadius: '10px', border: "0"}} arrowColor="#ffffff55"/>
    </div>
  );
};
export default ProjectSection;
