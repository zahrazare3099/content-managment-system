import { SelectedTab } from "@/components/selectedTab";
import { ShowEditorUser } from "@/components/EditorUser";

async function Layout({ children }) {
  return (
    <div className="layout_from_dashboard flex flex-col">
      <div className="flex justify-between items-center bg-slate-100 p-3  ">
        <ShowEditorUser />
        <SelectedTab />
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
}

export default Layout;
