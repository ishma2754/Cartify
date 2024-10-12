const Button = ({ type, onClick, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-pink-400 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-pink-300 dark:bg-pink-400 dark:text-black capitalize dark:hover:bg-pink-300"
    >{children}</button>
  );
};

export default Button;
