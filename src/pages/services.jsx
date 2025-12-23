import Connect from "@/sections/Connect";
import Hero from "@/sections/Hero";
import Product from "@/sections/Product";
import Success from "@/sections/Success";

export const metadata = {
  title: 'Services',
  isHeaderFixed: true,
};

export default function () {
  return (
    <>
      <Hero label="services" />
      <Success />
      <Product />
      <Connect />
    </>
  );
};