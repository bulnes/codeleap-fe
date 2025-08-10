import { forwardRef } from "react";

interface PostActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: "delete" | "edit";
}

export const PostActionButton = forwardRef<
  HTMLButtonElement,
  PostActionButtonProps
>(({ buttonType, ...rest }, ref) => {
  const buttonTitle = buttonType === "delete" ? "Delete post" : "Edit post";
  const buttonIconSrc =
    buttonType === "delete" ? "/icon-delete.svg" : "/icon-edit.svg";

  return (
    <button
      {...rest}
      type="button"
      ref={ref}
      title={buttonTitle}
      className="cursor-pointer border-none bg-transparent"
    >
      <img src={buttonIconSrc} alt="" loading="lazy" className="h-8 w-8" />
    </button>
  );
});

PostActionButton.displayName = "PostActionButton";
