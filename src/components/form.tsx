import { InputText } from "./input-text";
import { InputTextArea } from "./input-textarea";
import { SubmitButton } from "./submit-button";
import { Title } from "./title";

export const Form = () => {
  return (
    <form className="p-6 rounded-2xl border border-container">
      <Title>What's on your mind?</Title>

      <InputText
        label="Title"
        name="title"
        id="title"
        placeholder="Hello world"
        required
      />

      <InputTextArea
        label="Content"
        name="content"
        id="content"
        placeholder="Content here"
        required
      />

      <div className="text-right">
        <SubmitButton>Create</SubmitButton>
      </div>
    </form>
  );
};
