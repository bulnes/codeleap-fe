export function SubmitButton({
  children,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="submit"
      className="bg-[#7695EC] rounded-lg px-7 h-8 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      {...rest}
    >
      <span className="font-bold uppercase text-white">{children}</span>
    </button>
  );
}
