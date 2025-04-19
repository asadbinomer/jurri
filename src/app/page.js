import Image from "next/image";
import Layout from "./components/component/Layout";
import Hero from "./components/pages/home/Hero";
import Testimonial from "./components/pages/home/Testimonial";
import About from "./components/pages/home/About";
import Expertise from "./components/pages/home/Expertise";
import Clients from "./components/pages/home/Clients";
import OurTeam from "./components/pages/home/OurTeam";
import CaseStudies from "./components/pages/home/CaseStudies";
import Blog from "./components/pages/home/Blog";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About/>
      <Expertise/>
      <Testimonial/>
      <Clients/>
      <OurTeam/>
      <CaseStudies/>
      <Blog/>
    </Layout>
  );
}
