import Achievement from "@/sections/Achievement";
import Benefits from "@/sections/Benefits";
import Connect from "@/sections/Connect";
import Hero from "@/sections/Hero";

export const metadata = {
  title: 'About',
  isHeaderFixed: true,
};

export default function () {
  return (
    <>
      <Hero label="about" />
      <Achievement />
      <Benefits />
      <Connect />
    </>
  );
};