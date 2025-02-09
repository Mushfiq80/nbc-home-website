

interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  required: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, name, placeholder, required }) => {
  return (
    <div className="mb-4 ">
      <label className="block text-sm font-semibold text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="mt-1 block w-full bg-green-50 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>
  );
};

export default InputField;