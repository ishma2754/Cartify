const FormCheckbox = ({ label, name, defaultValue, size }) => {
  return (
    <div className="flex items-center space-x-2">
      <label htmlFor={name} className="flex items-center cursor-pointer">
        <span className="ml-2 text-sm font-medium text-gray-700 capitalize">
          {label}
        </span>
      </label>
      <input
        type="checkbox"
        name={name}
        defaultChecked={defaultValue}
        className={`h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 ${size}`}
      />
    </div>
  );
};

export default FormCheckbox;
