import { useState } from "react";
import type { PostProps } from "../@types/post-props";
import { STORAGE_SIGNUP_KEY } from "../constants";
import { timeAgo } from "../utils/helpers/time-ago";
import { PostActionButton } from "./post-action-button";
import { PostDelete } from "./post-delete";
import { PostEdit } from "./post-edit";

interface PostItemProps extends PostProps {
  onDeletePost: (id: number) => void;
  onEditPost: (postData: PostProps) => void;
}

export const Post = ({
  id,
  title,
  content,
  username,
  created_datetime,
  onDeletePost,
  onEditPost,
}: PostItemProps) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const loggedUsername = sessionStorage.getItem(STORAGE_SIGNUP_KEY) as string;
  const isEditable = username === loggedUsername;

  const formattedDate = timeAgo(created_datetime);

  return (
    <article>
      <div className="flex justify-between items-center bg-codeleap-brand p-6 rounded-t-2xl">
        <h2 className="font-bold text-[22px] text-white">{title}</h2>

        {isEditable && (
          <div className="flex justify-between items-center gap-6">
            <PostActionButton
              buttonType="delete"
              onClick={() => setIsDeleteModalOpen(true)}
            />
            <PostActionButton
              buttonType="edit"
              onClick={() => setIsEditModalOpen(true)}
            />
          </div>
        )}
      </div>

      <div className="border border-container border-t-0  rounded-b-2xl p-6">
        <div className="text-lg text-input flex justify-between items-center mb-4">
          <span className="font-bold">@{username}</span>
          <span>{formattedDate}</span>
        </div>

        <div
          className="flex flex-col gap-6 text-lg"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>

      <PostDelete
        id={id}
        isOpen={isDeleteModalOpen}
        closeModalAction={() => setIsDeleteModalOpen(false)}
        onDeletePost={onDeletePost}
      />
      <PostEdit
        id={id}
        title={title}
        content={content}
        isOpen={isEditModalOpen}
        closeModalAction={() => setIsEditModalOpen(false)}
        onEditPost={onEditPost}
      />
    </article>
  );
};
