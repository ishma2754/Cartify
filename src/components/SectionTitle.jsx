const SectionTitle = ({ text }) => {
  return (
    <div className="border-b border-gray-300 pb-2 dark:text-gray-100 dark:border-gray-100">
      <h2 className="font-bold capitalize text-3xl">{text}</h2>
    </div>
  );
};

export default SectionTitle;
