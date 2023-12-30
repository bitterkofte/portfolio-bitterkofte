import SectionSeparator from "./SectionSeparator";

const SectionContainer = ({ child, title, noSS }) => {
  return (
    <>
      <div className="min-h-screen p-16 d-md:p-8 flex flex-col justify-center gap-3 bg-green-300 dark:bg-green-800 rounded-xl transition-colors duration-500">
        <h2 className="mb-10 d-lg:text-center text-7xl d-sm:text-5xl font-bold dark:text-neutral-200 transition-all duration-500">{title}</h2>
        <div>{child}</div>
      </div>
      {!noSS && <SectionSeparator />}
    </>
  );
};
export default SectionContainer;
