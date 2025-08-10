import { forwardRef, type InputHTMLAttributes } from "react";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  ({ label, ...rest }, ref) => {
    return (
      <label className="block mb-4">
        <span className="font-normal text-base mb-2 block">{label}</span>
        <input
          {...rest}
          type="text"
          ref={ref}
          className="w-full border border-input rounded-lg py-2 px-3 h-8"
        />
      </label>
    );
  }
);

InputText.displayName = "InputText";
