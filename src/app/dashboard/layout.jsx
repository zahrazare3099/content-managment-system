import { SelectedTab } from "../_components/selectedTab";
import { ShowEditorUser } from "../_components/EditorUser";
import DataProvider from "@/context/DataProvider";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex justify-between items-center bg-slate-100 p-3  ">
        <ShowEditorUser />
        <SelectedTab />
      </div>
      <DataProvider>
        <div className="p-3">{children}</div>
      </DataProvider>
    </>
  );
};

export default Layout;
