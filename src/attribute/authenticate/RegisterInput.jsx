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
      className={`bg-mainlight block w-full border rounded-lg px-4 py-2 outline-none text-base 
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
