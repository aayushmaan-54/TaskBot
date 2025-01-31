import AiChatbot from "./_components/ai-chatbot";
import ToDoListPage from "./_components/todolist-page";


export default function Home() {
  return (
    <>
      <AiChatbot />
      <section className="bg-background-light dark:bg-background-dark w-screen h-screen flex justify-center items-center">
        <ToDoListPage />
      </section>
    </>
  );
}
