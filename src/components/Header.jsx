import { NavLink } from "react-router-dom";
import { FaUserGraduate, FaChalkboardTeacher, FaHome } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      {/* Top section: logo + title */}
      <div className="flex items-center justify-between px-4 py-5 md:px-12">
        <div className="flex items-center gap-3">
          <GiBookshelf className="text-5xl text-lime-600" />
          <div>
            <h2 className="font-bold text-lg md:text-xl text-lime-600">
              Student Management System
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Manage students and classes efficiently
            </p>
          </div>
        </div>
        {/* Mobile menu button (optional) */}
        <div className="md:hidden">{/* Hamburger icon can go here */}</div>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex flex-col md:flex-row md:justify-start md:gap-8 px-8 py-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded transition ${
                  isActive
                    ? "text-lime-600 font-semibold"
                    : "text-gray-800 hover:bg-lime-100"
                }`
              }
            >
              <FaHome /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/student"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded transition ${
                  isActive
                    ? "text-lime-600 font-semibold"
                    : "text-gray-800 hover:bg-lime-100"
                }`
              }
            >
              <FaUserGraduate /> Student
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/class"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded transition ${
                  isActive
                    ? "text-lime-600 font-semibold"
                    : "text-gray-800 hover:bg-lime-100"
                }`
              }
            >
              <FaChalkboardTeacher /> Class
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
