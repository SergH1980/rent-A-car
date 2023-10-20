import * as GoIcon from "react-icons/go";
import * as FaIcon from "react-icons/fa";
import * as AiIcon from "react-icons/ai";

export const NavBarData = [
  {
    title: "Home",
    path: "/",
    icon: <GoIcon.GoHomeFill />,
  },
  {
    title: "Catalogue",
    path: "/catalog",
    icon: <FaIcon.FaCar />,
  },
  {
    title: "Favorites",
    path: "/favorites",
    icon: <AiIcon.AiTwotoneLike />,
  },
];
