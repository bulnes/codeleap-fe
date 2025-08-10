export function InputTextField({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="text"
      className="w-full border border-[#777] rounded-lg py-2 px-3 h-8"
      {...props}
    />
  );
}
