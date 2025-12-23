import Section from '@/layouts/Section';
import './Designer.scss';
import PersonCard from '@/components/PersonCard';

export default () => {
  const personCardData = [
    {
      name: "Shoo Phar Dhie",
      department: "CEO",
      href: "./portfolio",
    },
    {
      name: "Shoo Phar Dhie",
      department: "CEO",
      href: "./portfolio",
    },
    {
      name: "Shoo Phar Dhie",
      department: "CEO",
      href: "./portfolio",
    },
    {
      name: "Shoo Phar Dhie",
      department: "CEO",
      href: "./portfolio",
    },
    {
      name: "Shoo Phar Dhie",
      department: "CEO",
      href: "./portfolio",
    },
    {
      name: "Shoo Phar Dhie",
      department: "CEO",
      href: "./portfolio",
    },
    {
      name: "Shoo Phar Dhie",
      department: "CEO",
      href: "./portfolio",
    },
    {
      name: "Shoo Phar Dhie",
      department: "CEO",
      href: "./portfolio",
    },
  ];

  return (
    <Section
      className="designer"
      mode="designer"
      subtitle="designer"
      subtitleWidth="72px"
      title="Creative Person"
      titleId="designer-title"
      description="Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations."
    >
      <div className="designer__content">
        <PersonCard personCardData={personCardData} />
      </div>
    </Section>
  );
};