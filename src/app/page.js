import Image from "next/image";
import Layout from "./components/component/Layout";
import Hero from "./components/pages/home/Hero";
import Testimonial from "./components/pages/home/Testimonial";
import About from "./components/pages/home/About";
import Expertise from "./components/pages/home/Expertise";
import Clients from "./components/pages/home/Clients";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About/>
      <Expertise/>
      <Testimonial/>
      <Clients/>
    </Layout>
  );
}
