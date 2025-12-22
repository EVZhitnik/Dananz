import About from "@/sections/About";
import Hero from "@/sections/Hero";
import Service from "@/sections/Service";

export const metadata = {
	title: 'Home',
	isHeaderFixed: true,
}

export default function () {
  return (
    <>
      <Hero label="home" />
      <About />
      <Service />
    </>
  )
}
