import { Link } from "react-router-dom";

const PaginationContainer = ({ totalPages, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center mt-4">
      <ul className="flex space-x-2">
        {pageNumbers.map((number) => (
          <li key={number}>
            <Link
              to="#"
              onClick={() => paginate(number)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === number
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-100"
              } ${currentPage === number ? "font-bold" : ""}`}
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PaginationContainer;
