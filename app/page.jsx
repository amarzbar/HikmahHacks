// Example Import, import YOUR component here to see on main page
// Main entry file
import Blog_stip from "./components/blog_strip";
import Nav from "./components/nav";
import Hero from "./components/hero";
import Faqs from "./components/faqs";
import Team_strip from "./components/team";
import { Ubuntu } from 'next/font/google';
import Footer from "./components/footer";
export default function Home() {
  return (
    <>
    <main className="absolute overflow-clip min-h-full w-full flex flex-col bg-[#26272D] Ubuntu.className">
      <Nav/> 
      <Hero/>
      <img className="bg-[#26272D] object-contain scale-150  z-3 background-transparent w-[100%]   overflow-hidden fill-[#202127]" src="/mosque.png" alt="Divider" />

      <Faqs/>
      <img className="bg-[#26272D] object-contain scale-150  z-3 background-transparent w-[100%]   overflow-hidden fill-[#202127]" src="/wavesOpacity.svg" alt="Divider" />

      <Team_strip/>
      <img className="bg-[#26272D] object-contain scale-150 background-transparent w-[100%]   overflow-hidden fill-[#202127]" src="/wavesNegative.svg" alt="Divider" />

      <Footer/>
      
    </main>
    </>
  );
}
