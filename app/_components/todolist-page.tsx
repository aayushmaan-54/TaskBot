import { handwriting } from "../layout";
import Header from "./header";


export default function ToDoListPage() {

  return (
    <main className={`
      bg-primary-light 
      dark:bg-primary-dark 
      rounded-xl 
      shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] 
      sm:w-[500px] 
      w-[80vw] 
      h-[50vh] 
      sm:h-[65vh] 
      rotate-2 
      max-[400px]:w-[90vw]
      ${handwriting.className} 
      flex 
      flex-col
    `}>
      <Header />

      <div className="overflow-y-auto flex-grow">

      </div>

      <hr className="dashed-border" />
      <div className="mt-auto pb-2 pl-3">
        <form className="font-semibold text-[24px] flex items-center">
          <input
            type="text"
            required
            placeholder="Add a new To-do"
            className="outline-none border-none flex-1 pr-2 bg-transparent"
          />
          <button
            type="submit"
            className="bg-secondary-light dark:bg-secondary-dark hover:bg-secondary-hover-light dark:hover:bg-secondary-hover-dark text-text-light dark:text-text-dark rounded-full px-4 py-[2px] mr-3 text-[20px] xs:text-[20px] max-[400px]:text-[10px] max-[400px]:py-2"
          >
            Add Todo
          </button>
        </form>
      </div>
    </main>
  );
}