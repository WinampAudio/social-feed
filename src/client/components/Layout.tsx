import { LayoutGrid } from "lucide-react";
import { Link, NavLink, Outlet } from "react-router";
import { classNames } from "~/modules/styles";

export function Layout() {
  return (
    <div className="px-6 min-h-full">
      <div className="flex flex-col max-w-[1200px] mx-auto">
        <Header />
        <main className="size-full flex justify-center overflow-auto py-12">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function Header() {
  const tabs = [
    { name: "Feed", value: "feed" },
    { name: "About", value: "about" },
    { name: "Contact", value: "contact" },
  ];

  return (
    <header className="w-full">
      <div className=" flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <LayoutGrid className="h-6 w-6" />
          <span className="text-xl font-bold">Logo</span>
        </Link>

        <nav className="flex gap-4">
          {tabs.map((tab) => (
            <NavLink
              key={tab.value}
              to={`/${tab.value}`}
              className={({ isActive }) =>
                classNames(
                  "px-3 py-2 text-sm font-medium transition-colors text-slate-600 border-b-2 border-transparent hover:text-slate-950 border-solid transition-all",
                  isActive && "text-slate-950 border-black"
                )
              }
            >
              {tab.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
