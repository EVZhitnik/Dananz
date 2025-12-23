import Achievement from "@/sections/Achievement";
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
    </>
  );
};