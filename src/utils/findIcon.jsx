import { SiAxios, SiExpo, SiFirebase, SiFramer, SiLeaflet, SiMantine, SiMongodb, SiMysql, SiNextdotjs, SiNpm, SiPuppeteer, SiReact, SiReactrouter, SiRedux, SiStyledcomponents, SiTailwindcss, SiTypescript, SiVuedotjs } from "react-icons/si";
import { RiMoreFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { LuNavigation } from "react-icons/lu";

export const findIcon = (arr) => {
  const iconSet = arr.map((t) => {
    switch (t) {
      case "react":
        return {icon: <SiReact />, name:"React.js" };
        
      case "vue.js":
        return {icon: <SiVuedotjs />, name:"Vue.js" };

      case "mongodb":
        return {icon: <SiMongodb />, name:"React.js" };

      case "mysql":
        return {icon: <SiMysql />, name:"React.js" };

      case "next.js":
        return {icon: <SiNextdotjs />, name:"Next.js" };

      case "react-native":
        return {icon: <TbBrandReactNative />, name:"React Native" };

      case "react-navigation":
        return {icon: <LuNavigation />, name:"React Navigation" };

      case "react-router":
        return {icon: <SiReactrouter />, name:"React Router" };

      case "firebase":
        return {icon: <SiFirebase />, name:"Firebase" };

      case "redux":
        return {icon: <SiRedux />, name:"Redux" };

      case "tailwind-css":
        return {icon: <SiTailwindcss />, name:"Tailwind CSS" };

      case "styled-components":
        return {icon: <SiStyledcomponents />, name:"Styled Components" };

      case "framer-motion":
        return {icon: <SiFramer />, name:"Framer Motion" };

      case "mantine":
        return {icon: <SiMantine />, name:"Mantine" };

      case "puppeteer":
        return {icon: <SiPuppeteer />, name:"Puppeteer" };

      case "axios":
        return {icon: <SiAxios />, name:"Axios" };

      case "typescript":
        return {icon: <SiTypescript />, name:"Typescript" };

      case "leaflet":
        return {icon: <SiLeaflet />, name:"Leaflet" };

      case "expo-icons":
        return {icon: <SiExpo />, name:"Expo" };

      default:
        return {icon: <SiNpm />, name:t };
    }
  });
  if(arr.length > 4) {
    const result = iconSet.slice(0,3);
    result.push({icon: <RiMoreFill/>, name:"More" })
    return result
  }
  else return iconSet;
};
