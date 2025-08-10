import { CancelButton } from "./cancel-button";
import { InputText } from "./input-text";
import { InputTextArea } from "./input-textarea";
import { Modal } from "./modal";
import { SubmitButton } from "./submit-button";
import { Title } from "./title";

export const PostEdit = () => {
  return (
    <Modal isOpen={false}>
      <div className="bg-white rounded-2xl p-6 w-full md:w-[660px] flex flex-col">
        <Title>Edit item</Title>

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

        <div className="flex justify-end gap-4">
          <CancelButton />
          <SubmitButton buttonType="green">Save</SubmitButton>
        </div>
      </div>
    </Modal>
  );
};
