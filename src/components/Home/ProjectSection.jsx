import ProjectCard from "./ProjectCard";

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
      <div className="flex items-center">
        {/* SECTION - PROJECT CARDS */}
        <ProjectCard/>
      </div>
      <div className="">{/* SECTION - RIGHT MORE BUTTON */}</div>
    </div>
  );
};
export default ProjectSection;
