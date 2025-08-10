import { Form } from "../components/form";
import { Post } from "../components/post";

export const MainPage = () => {
  return (
    <section className="bg-white w-full max-w-[800px] min-h-screen">
      <div className="bg-codeleap-brand py-7 px-8">
        <h1 className="font-bold text-[22px] text-white">CodeLeap Network</h1>
      </div>

      <main className="flex flex-col gap-6 p-6">
        <Form />

        <Post />
        <Post />
        <Post />
      </main>
    </section>
  );
};
