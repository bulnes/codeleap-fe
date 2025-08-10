import { deletePost } from "../repositories/code-leap-repo";
import { CancelButton } from "./cancel-button";
import { Modal } from "./modal";
import { SubmitButton } from "./submit-button";
import { Title } from "./title";

interface PostDeleteProps {
  id: number;
  isOpen: boolean;
  closeModalAction: () => void;
  onDeletePost: (id: number) => void;
}

export const PostDelete = ({
  id,
  isOpen,
  closeModalAction,
  onDeletePost,
}: PostDeleteProps) => {
  const handleDeletePost = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    await deletePost({ id });
    closeModalAction();
    onDeletePost(id);
  };

  return (
    <Modal isOpen={isOpen}>
      <div className="bg-white rounded-2xl p-6 w-full md:w-[660px] flex flex-col gap-4">
        <Title>Are you sure you want to delete this item?</Title>
        <div className="flex justify-end gap-4">
          <CancelButton onClick={closeModalAction} />
          <SubmitButton buttonType="red" onClick={handleDeletePost}>
            Delete
          </SubmitButton>
        </div>
      </div>
    </Modal>
  );
};
