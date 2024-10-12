const FormSelect = ({ label, name, list, value, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        <span className="capitalize dark:text-gray-100">{label}</span>
      </label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className={`block lg:px-3 lg:py-2 px-2 py-1  w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer dark:bg-gray-800 dark:text-gray-100`}
      >
        {list.map((item) => {
          return (
            <option  key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormSelect;
