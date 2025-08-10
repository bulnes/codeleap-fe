import clsx from "clsx";
import { forwardRef } from "react";

interface SubmitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonType?: "default" | "green" | "red";
}

export const SubmitButton = forwardRef<HTMLButtonElement, SubmitButtonProps>(
  ({ children, buttonType = "default", ...rest }, ref) => {
    return (
      <button
        {...rest}
        type="submit"
        ref={ref}
        className={clsx(
          "rounded-lg px-7 h-8 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed w-[120px]",
          {
            "bg-codeleap-brand": buttonType === "default",
            "bg-[#FF5151]": buttonType === "red",
            "bg-[#47B960]": buttonType === "green",
          }
        )}
      >
        <span className="font-bold text-white">{children}</span>
      </button>
    );
  }
);

SubmitButton.displayName = "SubmitButton";
