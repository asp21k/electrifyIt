import SideBar from "../components/sidebar";
const DashboardLayout = ({ children }) => {
  return (
    <main className="flex">
      <div className="w-1/6 sticky left-0 top-0 bg-blue-800/15">
        <SideBar />
      </div>
      <div className="w-5/6 h-fit px-16 bg-black">{children}</div>
    </main>
  );
};
export default DashboardLayout;
