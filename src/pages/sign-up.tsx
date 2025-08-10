import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { InputText } from "../components/input-text";
import { SubmitButton } from "../components/submit-button";
import { Title } from "../components/title";
import { STORAGE_SIGNUP_KEY } from "../constants";

export function SignUpPage() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const username = formData.get("username") as string;
    const formattedUsername = username.trim().replace(/\s+/g, " ");

    sessionStorage.setItem(STORAGE_SIGNUP_KEY, formattedUsername);

    navigate("/");
  };

  useEffect(() => {
    const usernameInput = usernameRef.current;
    if (usernameInput) {
      usernameInput.addEventListener("input", () => {
        setIsSubmitButtonDisabled(usernameInput.value.trim() === "");
      });
    }

    return () => {
      if (usernameInput) {
        usernameInput.removeEventListener("input", () => {});
      }
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-[500px] border border-[#ccc] rounded-2xl p-6"
      >
        <Title>Welcome to CodeLeap network!</Title>

        <InputText
          ref={usernameRef}
          label="Please enter your username"
          name="username"
          id="username"
          placeholder="John Doe"
          required
        />

        <div className="text-right">
          <SubmitButton disabled={isSubmitButtonDisabled}>
            <span className="uppercase">Enter</span>
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}
