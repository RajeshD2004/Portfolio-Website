import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      {/* RD Logo */}
      <NavLink to="/">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white text-xl font-bold shadow-lg hover:scale-110 transition-all duration-300">
          RD
        </div>
      </NavLink>

      {/* Navigation */}
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg transition-all duration-300 ${
              isActive
                ? "bg-blue-600 text-white shadow-md"
                : "text-gray-800 hover:text-blue-600 hover:bg-blue-50"
            }`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg transition-all duration-300 ${
              isActive
                ? "bg-blue-600 text-white shadow-md"
                : "text-gray-800 hover:text-blue-600 hover:bg-blue-50"
            }`
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;