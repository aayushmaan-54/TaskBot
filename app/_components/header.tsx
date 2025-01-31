import ToggleTheme from "@/components/toggle-theme";
import { handwriting, outfit } from "../layout";


export default function Header() {

  return (
    <>
      <header className="flex items-center justify-between px-4 pt-2">
        <div className={`${handwriting.className} font-semibold text-3xl flex items-center gap-3`}>
          <h1>My To-do List</h1>
          <span className="bg-neutral-light dark:bg-neutral-dark px-3 rounded-full text-xl">2 item(s)</span>
        </div>

        <ToggleTheme />
      </header>
      <hr className="dashed-border" />
    </>
  );
}