import Connect from "@/sections/Connect";
import Details from "@/sections/Details";
import Hero from "@/sections/Hero";

export const metadata = {
  title: 'Details',
  isHeaderFixed: true,
};

export default function () {
  return (
    <>
      <Hero label="details" />
      <Details />
      <Connect />
    </>
  );
};
