"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarItems = [
  { title: "Overview", href: "/dashboard" },
  { title: "Vehicles", href: "/dashboard/vehicles" },
  { title: "Chargers", href: "/dashboard/chargers" },
  { title: "Drivers", href: "/dashboard/drivers" },
  { title: "Schedules", href: "/dashboard/schedules" },
  { title: "Reports", href: "/dashboard/reports" },
  { title: "Admin Panel", href: "/dashboard/admin" },
];
const SideItem = ({ href, children }) => {
  const pathname = usePathname();

  return (
    <Link href={href}>
      <p
        className={`flex items-center p-2 rounded-lg text-white 5  hover:bg-white hover:text-black group ${
          pathname === href && "hover:bg-white hover:text-black"
        }`}
      >
        <span className="flex-1 mx-3 whitespace-nowrap">{children}</span>
      </p>
      <hr className="border-white/20 w-4/5 mx-auto" />
    </Link>
  );
};

const SideBar = () => {
  const router = useRouter();

  return (
    <div className="h-screen sticky left-0 top-0">
      <ul className="space-y-2 font-bold">
        {sidebarItems.map((item, index) => (
          <li key={index}>
            <SideItem href={item.href}>{item.title}</SideItem>
          </li>
        ))}
        <li>
          <div className="flex items-center p-2 rounded-lg text-white  hover:invert group px-5">
            <button className="w-full text-left">Logout</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
