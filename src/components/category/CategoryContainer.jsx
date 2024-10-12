import { categories } from "../../data/categories";
import { ProductsGrid } from "../index";

const CategoryContainer = () => {
  const categoriesProducts = categories.filter(
    (item) => item.type === "category"
  );

  return (
    <>
      <ProductsGrid
        products={categoriesProducts}
        text="Shop By Category"
        isCategory={true}
      />
    </>
  );
};

export default CategoryContainer;
