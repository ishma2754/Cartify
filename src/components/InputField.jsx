const InputField = ({label, type, name, defaultValue, size, onChange}) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor={name}><span className="capitalize">{label}</span></label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        onChange={onChange}
        className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${size}`}
      ></input>
    </div>
  );
};

export default InputField;
