import About from "@/sections/About";
import Hero from "@/sections/Hero";

export const metadata = {
	title: 'Home',
	isHeaderFixed: true,
}

export default function () {
  return (
    <>
      <Hero label="home" />
      <About />
    </>
  )
}
