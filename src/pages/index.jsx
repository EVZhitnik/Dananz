import About from "@/sections/About";
import Connect from "@/sections/Connect";
import Hero from "@/sections/Hero";
import Material from "@/sections/Material";
import Product from "@/sections/Product";
import Service from "@/sections/Service";

export const metadata = {
	title: 'Home',
	isHeaderFixed: true,
};

export default function () {
  return (
    <>
      <Hero label="home" />
      <About label="padding" />
      <Service label="padding" />
      <Product label="padding" />
      <Material label="padding" />
      <Connect />
    </>
  );
};
