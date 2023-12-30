const GrandButton = ({ clickFunc, text, color }) => {
  // const bgColor = color ? `bg-${color}-300 dark:bg-${color}-600` : "bg-sky-200 dark:bg-sky-600";
  // const bgColor = `bg-${color}-300 dark:bg-${color}-600`;
  // const bgColor = color ? 'bg-'+color+'-300 dark:bg-'+color+'-600' : "bg-sky-200 dark:bg-sky-600";
  // const clr = () => `bg-${color}-300`
  return (
    <button
      className={`w-fit px-4 py-2 rounded-md text-lg font-extrabold ${color ? color : "bg-sky-300 dark:bg-sky-700"} dark:text-neutral-200 transition-colors duration-500`}
      // className={`px-4 py-2 text-lg font-extrabold ${bgColor}`}
      // className={`px-4 py-2 text-lg font-extrabold ${color ? bgColor : "bg-sky-200 dark:bg-sky-600"}`}  
      onClick={clickFunc}
    >
      {text}
    </button>
  );
};
export default GrandButton;
