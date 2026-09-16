import Image from "next/image";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";

export default function Home() {
  return (
  <div>
    <AboutMe/>
    <h2 className="text-center text-3xl text-navigation-hover-text font-bold">Experiences</h2>
    <hr className="w-3/4 rounded-2xl border-2 m-auto mt-6 mb-4 border-navigation-hover-text"></hr>
    <Experience/>
  </div>
  );
}
