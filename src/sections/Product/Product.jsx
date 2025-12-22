import Section from '@/layouts/Section';
import './Product.scss';
import Button from '@/components/Button';

export default () => {
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
      mode="product"
      isTwoColumnsInfo
      subtitle="product"
      subtitleWidth="76px"
      title={<>Choose your <br />product themes.</>}
      titleId="product-title"
      description="Find the theme you want. If our choice of theme is not what you want, you can customize it as you want."
    >
      <ol className="product__list">
        {productData.map(({ title, description }, index) => (
          <li className="product__item" key={index}>
            <div className="product__text">
              <h3 className="product__title">{title}</h3>
              <div className="product__description">
                <p>{description}</p>
              </div>
            </div>
            <Button 
              className="product__link"
              hred="./"
              isLabelHidden
              iconName="arrow-right"
            />
          </li>
        ))}
      </ol>
    </Section>
  );
};