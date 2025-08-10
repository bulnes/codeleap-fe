export function Post() {
  return (
    <article>
      <div className="flex justify-between items-center bg-codeleap-brand p-6 rounded-t-2xl">
        <h2 className="font-bold text-[22px] text-white">
          My First Post at CodeLeap Network!
        </h2>

        <div className="flex justify-between items-center gap-6">
          <button
            type="button"
            title="Delete post"
            className="cursor-pointer border-none bg-transparent"
          >
            <img
              src="/icon-delete.svg"
              alt=""
              loading="lazy"
              className="h-8 w-8"
            />
          </button>

          <button
            type="button"
            title="Edit post"
            className="cursor-pointer border-none bg-transparent"
          >
            <img
              src="/icon-edit.svg"
              alt=""
              loading="lazy"
              className="h-8 w-8"
            />
          </button>
        </div>
      </div>

      <div className="border border-container border-t-0  rounded-b-2xl p-6">
        <div className="text-lg text-input flex justify-between items-center mb-4">
          <span className="font-bold">@Victor</span>
          <span>25 minutes ago</span>
        </div>

        <div className="flex flex-col gap-6 text-lg">
          <p>
            Curabitur suscipit suscipit tellus. Phasellus consectetuer
            vestibulum elit. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Maecenas egestas arcu
            quis ligula mattis placerat. Duis vel nibh at velit scelerisque
            suscipit.
          </p>

          <p>
            Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed
            cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor
            sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia
            erat.
          </p>
        </div>
      </div>
    </article>
  );
}
