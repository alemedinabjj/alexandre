export const Input = ({ label, type, id, placeholder, value, onChange }) => {
  return (
    <div>
      <label htmlFor="name" className="sr-only">
        {label}
      </label>
      <input
        type={type}
        name="name"
        id={id}
        autoComplete="name"
        placeholder={placeholder}
        required
        className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
