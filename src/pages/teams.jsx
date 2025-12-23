import Benefits from "@/sections/Benefits";
import Connect from "@/sections/Connect";
import Designer from "@/sections/Designer";
import Hero from "@/sections/Hero";

export const metadata = {
  title: 'Teams',
  isHeaderFixed: true,
};

export default function () {
  return (
    <>
      <Hero label="teams" />
      <Designer />
      <Benefits />
      <Connect />
    </>
  );
};