export default function LoginInput({ type, name, placeholder, value, onChange, Error }) {
  return (
    <input
      className={`block w-full border rounded-lg px-4 py-2 outline-none text-lg 
    ${Error ? "border-red-500" : "border-main"}
    `}
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    />
  );
}
