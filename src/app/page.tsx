import Blogs from "./components/Blogs";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";


export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Testimonials />
      <Blogs />
      <Newsletter />
    </main>
  );
} 