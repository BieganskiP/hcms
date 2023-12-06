interface TextInputProps {
  id?: string;
  type?: string;
  placeholder?: string;
  label: string;
  htmlFor: string;
  onChange?: any;
}

export default function TextInput({
  id,
  type,
  placeholder,
  label,
  htmlFor,
  onChange,
}: TextInputProps) {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={htmlFor}
      >
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
