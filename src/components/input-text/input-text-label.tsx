export function InputTextLabel({
  children,
  ...rest
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className="font-normal text-base mb-2 block" {...rest}>
      {children}
    </label>
  );
}
