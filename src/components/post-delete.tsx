import { CancelButton } from "./cancel-button";
import { Modal } from "./modal";
import { SubmitButton } from "./submit-button";
import { Title } from "./title";

export const PostDelete = () => {
  return (
    <Modal isOpen={false}>
      <div className="bg-white rounded-2xl p-6 w-full md:w-[660px] flex flex-col gap-4">
        <Title>Are you sure you want to delete this item?</Title>
        <div className="flex justify-end gap-4">
          <CancelButton />
          <SubmitButton buttonType="red">Delete</SubmitButton>
        </div>
      </div>
    </Modal>
  );
};
