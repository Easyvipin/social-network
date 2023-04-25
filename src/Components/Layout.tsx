import FollowBar from "./layout/FollowBar";
import SideBar from "./layout/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen border-2">
      <div className="container h-full mx-auto xl:px-30">
        <div className="grid grid-cols-4 h-full border-4 border-red-400">
          <SideBar />
          <div className="col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800 ">
            {children}
          </div>
          <FollowBar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
