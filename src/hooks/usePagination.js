import { useState } from "react";
const usePagination = (items, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);


    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const currentProducts =  items.slice(indexOfFirstItem, indexOfLastItem);
  

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return {
    currentPage,
    totalPages,
    currentProducts,
    paginate,
  };
};

export default usePagination;
