const FormInput = ({ label, name, type,  size, onChange, value}) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        <span className="capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${size}`}
      />
    </div>
  );
};

export default FormInput;