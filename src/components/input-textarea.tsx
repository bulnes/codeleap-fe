import { forwardRef, type InputHTMLAttributes } from "react";

interface InputTextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const InputTextArea = forwardRef<
  HTMLTextAreaElement,
  InputTextAreaProps
>(({ label, ...rest }, ref) => {
  return (
    <label className="block mb-4">
      <span className="font-normal text-base mb-2 block">{label}</span>
      <textarea
        {...rest}
        ref={ref}
        className="w-full border border-input rounded-lg py-2 px-3 h-20 resize-none"
      />
    </label>
  );
});

InputTextArea.displayName = "InputTextArea";
