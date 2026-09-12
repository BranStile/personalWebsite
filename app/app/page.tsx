import Image from "next/image";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";

export default function Home() {
  return (
  <div>
    <AboutMe/>
    <Experience/>
  </div>
  );
}
