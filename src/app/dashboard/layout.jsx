import { redirect } from "next/navigation";
import { SelectedTab } from "../_components/selectedTab";
import { ShowEditorUser } from "../_components/EditorUser";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex bg-zinc-300 p-3 justify-between items-center">
        <SelectedTab />
        <ShowEditorUser />
      </div>
      {children}
    </>
  );
};

export default Layout;
