import Connect from "@/sections/Connect";
import Hero from "@/sections/Hero";
import Loaction from "@/sections/Loaction";

export const metadata = {
  title: 'Contanct',
  isHeaderFixed: true,
};

export default function () {
  return (
    <>
      <Hero label="contact" />
      <Loaction />
      <Connect />
    </>
  );
};