import alonso from "../../assets/alonso2.jpg"
import { SiReact } from "react-icons/si";

const ProjectCard = () => {
  return (
    <div className="p-6 flex flex-col gap-5 bg-teal-800 rounded-xl hover:drop-shadow-lg transition-all duration 200ms">
      <img className='w-28 rounded-xl drop-shadow-md' src={alonso} alt='project-logo' />
      <h3 className="text-xl font-bold dark:text-neutral-200 duration-500">Title</h3>
      <p className="dark:text-neutral-200 duration-500">details</p>
      <div className=" flex items-center gap-2">
        {Array(5).fill(0).map(t => {
          switch (true) {
            case "react":
              return <SiReact className="p-2 bg-neutral-300"/>;
          
            default:
              return <SiReact/>;
          }
})}
      </div>
    </div>
  )
}
export default ProjectCard