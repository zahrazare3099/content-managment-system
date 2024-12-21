import { Suspense } from "react";
import Loading from "./loading";

const Layout = ({ children }) => {
  return (
    <div className="min-w-full grid grid-cols-2 gap-4 px-2 py-3">
      <Suspense fallback={<Loading />}> {children}</Suspense>
    </div>
  );
};

export default Layout;
