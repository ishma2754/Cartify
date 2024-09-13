import { Filters, ProductsContainer, PaginationContainer } from "../components";
import { useParams } from "react-router-dom";
import { categoriesData } from "../../categoriesData";
import useFilteredData from "../hooks/useFilteredData";
const CategoryPage = () => {
  const {category} = useParams()
  const categoryData = categoriesData.find(item => item.id === category)
  const categoryProducts = categoryData ? categoryData.products : [];
  const filteredProducts = useFilteredData(categoryProducts, (state) => state.filters);
  return (
    <>
      <Filters/>
      <ProductsContainer text={categoryData ? categoryData.title : "Category"} products={filteredProducts} isCategory={false}/>
      <PaginationContainer />
    </>
  );
};

export default CategoryPage;
