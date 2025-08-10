import type { PostProps } from "../@types/post-props";
import { STORAGE_SIGNUP_KEY } from "../constants";
import { createPost } from "../repositories/code-leap-repo";
import { InputText } from "./input-text";
import { InputTextArea } from "./input-textarea";
import { SubmitButton } from "./submit-button";
import { Title } from "./title";

export const Form = ({
  onAddNewPost,
}: {
  onAddNewPost: (postData: PostProps) => void;
}) => {
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const username = sessionStorage.getItem(STORAGE_SIGNUP_KEY) as string;

    const postData = await createPost({ title, content, username });
    onAddNewPost(postData);

    form.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 rounded-2xl border border-container"
    >
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
