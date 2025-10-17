//app/Page.tsx
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import ReadyToWork from "@/components/ReadyToWork";
// import Skills from "@/components/Skills";
// import Services from "@/components/Services";
// import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <ReadyToWork />
      {/* <Brands />
      <Services />
      <Skills />
      <Work />
      <Reviews /> */}
      {/* <Experience /> */}

      {/* <Contact /> */}
    </>
  );
}
