export default function RegisterInput({
  type,
  placeholder,
  name,
  value,
  onChange,
  Error,
}) {
  return (
    <input
      className={`block w-full border rounded-lg px-4 py-2 outline-none text-lg 
      ${Error ? "border-red-500" : "border-main"}
      `}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}
