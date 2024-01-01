import { SiFirebase, SiNpm, SiReact, SiRedux } from "react-icons/si";
import { RiMoreFill } from "react-icons/ri";

export const findIcon = (arr) => {
  const iconSet = arr.map((t) => {
    switch (t) {
      case "react":
        return <SiReact />;

      case "firebase":
        return <SiFirebase />;

      case "redux":
        return <SiRedux />;

      default:
        return <SiNpm />;
    }
  });
  if(arr.length > 4) {
    const result = iconSet.slice(0,3);
    result.push(<RiMoreFill/>)
    return result
  }
  else return iconSet;
};
