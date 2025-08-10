import { forwardRef } from "react";

interface SubmitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const SubmitButton = forwardRef<HTMLButtonElement, SubmitButtonProps>(
  ({ children, ...rest }, ref) => {
    return (
      <button
        {...rest}
        type="submit"
        ref={ref}
        className="bg-[#7695EC] rounded-lg px-7 h-8 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="font-bold text-white">{children}</span>
      </button>
    );
  }
);

SubmitButton.displayName = "SubmitButton";
