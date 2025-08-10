import type { PostProps } from "../@types/post-props";
import { updatePost } from "../repositories/code-leap-repo";
import { CancelButton } from "./cancel-button";
import { InputText } from "./input-text";
import { InputTextArea } from "./input-textarea";
import { Modal } from "./modal";
import { SubmitButton } from "./submit-button";
import { Title } from "./title";

interface PostEditProps {
  id: number;
  title: string;
  content: string;
  isOpen: boolean;
  closeModalAction: () => void;
  onEditPost: (post: PostProps) => void;
}

export const PostEdit = ({
  id,
  title,
  content,
  isOpen,
  closeModalAction,
  onEditPost,
}: PostEditProps) => {
  const handleEditPost = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    await updatePost({ id, title, content });
    closeModalAction();
    onEditPost({ id, title, content } as PostProps);
  };

  return (
    <Modal isOpen={isOpen}>
      <form
        onSubmit={handleEditPost}
        className="bg-white rounded-2xl p-6 w-full md:w-[660px] flex flex-col"
      >
        <Title>Edit item</Title>

        <InputText
          label="Title"
          name="title"
          id="title"
          placeholder="Hello world"
          required
          defaultValue={title}
        />

        <InputTextArea
          label="Content"
          name="content"
          id="content"
          placeholder="Content here"
          required
          defaultValue={content}
        />

        <div className="flex justify-end gap-4">
          <CancelButton onClick={closeModalAction} />
          <SubmitButton buttonType="green">Save</SubmitButton>
        </div>
      </form>
    </Modal>
  );
};
