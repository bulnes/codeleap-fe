import { forwardRef } from "react";

export const CancelButton = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ ...rest }, ref) => {
  return (
    <button
      {...rest}
      type="button"
      ref={ref}
      className="bg-white rounded-lg border border-container px-7 h-8 cursor-pointer w-[120px]"
    >
      <span className="font-bold text-black text-base">Cancel</span>
    </button>
  );
});

CancelButton.displayName = "CancelButton";
