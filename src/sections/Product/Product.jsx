import Section from '@/layouts/Section';
import './Product.scss';
import Accordion from '@/components/Accordion';

export default (props) => {
  const {
    label = "",
  } = props;

  const productData = [
    {
      title: "Vintage",
      description: "the use of simple and limited elements to get the best effect or impression."
    },
    {
      title: "Minimalist",
      description: "the use of simple and limited elements to get the best effect or impression."
    },
    {
      title: "Modern",
      description: "the use of simple and limited elements to get the best effect or impression."
    },
    {
      title: "transitional",
      description: "the use of simple and limited elements to get the best effect or impression."
    },
  ];

  return (
    <Section
      className="product"
      label={label}
      mode="product"
      isTwoColumnsInfo
      subtitle="product"
      subtitleWidth="76px"
      title={<>Choose your <br />product themes.</>}
      titleId="product-title"
      description="Find the theme you want. If our choice of theme is not what you want, you can customize it as you want."
    >
      <div className="product__accordion">
        <Accordion
          mode="product" 
          tag="h3"
          accordionData={productData} 
        />
      </div>
    </Section>
  );
};