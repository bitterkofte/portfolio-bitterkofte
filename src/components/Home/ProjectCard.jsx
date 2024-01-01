import alonso from "../../assets/alonso2.jpg";
import { SiReact } from "react-icons/si";
import { projects } from "../../../data/projects";
import { findIcon } from "../../utils/findIcon";

const ProjectCard = ({ title, desc, tools }) => {
  const correspondingIcon = findIcon(tools);
  // console.log('correspondingIcon: ', findIcon(["react", "react-navigation", "firebase", "expo-icons"]))
  // const correspondingIcon = <SiReact  />;
  return (
    <div className="w-60 h-[340px] p-6 flex flex-col justify-between gap-5 bg-teal-600 dark:bg-teal-800 rounded-xl hover:drop-shadow-lg transition-all duration-300">
      <img
        className="w-28 rounded-xl drop-shadow-md self-center"
        src={alonso}
        alt="project-logo"
      />
      <h3 className="text-xl font-bold dark:text-neutral-200 duration-500">
        {title.length > 15 ? title.slice(0, 13) + "..." : title}
      </h3>
      <p className="dark:text-neutral-200 duration-500">{desc.slice(0, 30)}</p>
      <div className=" flex items-center gap-2">
        {correspondingIcon.map((m, i) => (
          <div
            key={i}
            className="p-2 bg-neutral-500 rounded-lg text-neutral-200 select-none"
            data-tooltip-id="tools"
            data-tooltip-content={m.name}
            data-tooltip-place="top"
          >
            {m.icon}
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProjectCard;
