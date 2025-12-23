import Benefits from "@/sections/Benefits";
import Connect from "@/sections/Connect";
import Hero from "@/sections/Hero";
import Portfolio from "@/sections/Portfolio";

export const metadata = {
  title: 'Portfolio',
  isHeaderFixed: true,
};

export default function () {
  return (
    <>
      <Hero label="portfolio" />
      <Portfolio />
      <Benefits />
      <Connect />
    </>
  );
};