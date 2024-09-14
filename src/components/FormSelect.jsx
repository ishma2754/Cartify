const FormSelect = ({ label, name, list, value, size, onChange }) => {
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
        className={`block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer dark:bg-gray-800 dark:text-gray-100 ${size}`}
      >
        {list.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormSelect;
