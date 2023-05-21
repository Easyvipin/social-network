import FollowBar from "./layout/FollowBar";
import SideBar from "./layout/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen border-2">
      <div className="xl:px-30 container mx-auto h-full">
        <div className="grid h-full grid-cols-4 border-4 border-red-400">
          <SideBar />
          <div className="col-span-3 border-x-[1px] border-neutral-800 lg:col-span-2 ">
            {children}
          </div>
          <FollowBar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
