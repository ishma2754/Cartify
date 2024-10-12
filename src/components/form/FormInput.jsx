const FormInput = ({ label, name, type, onChange, value}) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-black">
        <span className="capitalize dark:text-gray-100">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`mt-1 block w-full lg:px-3 lg:py-2 px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800
          dark:text-gray-100`}
      />
    </div>
  );
};

export default FormInput;