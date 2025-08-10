import { useNavigate } from "react-router";
import {
  InputTextField,
  InputTextLabel,
  InputTextWrapper,
} from "../components/input-text";
import { SubmitButton } from "../components/submit-button";
import { Title } from "../components/title";
import { STORAGE_SIGNUP_KEY } from "../constants";

export function SignUpPage() {
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

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-[500px] border border-[#ccc] rounded-2xl p-6"
      >
        <Title>Welcome to CodeLeap network!</Title>

        <InputTextWrapper>
          <InputTextLabel htmlFor="username">
            Please enter your username
          </InputTextLabel>
          <InputTextField
            name="username"
            id="username"
            placeholder="John doe"
            required
          />
        </InputTextWrapper>

        <div className="text-right">
          <SubmitButton>Enter</SubmitButton>
        </div>
      </form>
    </div>
  );
}
