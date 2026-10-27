import Header from "../Components/Header";
import AboutMe from "../Components/AboutMe";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Experience from "../Components/Experience";
import Education from "../Components/Education";
import Contact from "../Components/Contact";

const Home = () => (
  <main className="mx-auto flex max-w-[1440px] flex-col gap-14 px-5 pb-20 pt-12 sm:px-10 lg:px-20 lg:pt-[72px]">
    <Header />
    <AboutMe />
    <Skills />
    <Projects />
    <Experience />
    <Education />
    <Contact />
  </main>
);

export default Home;
