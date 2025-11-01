import { useState, useEffect } from "react";
import { FaEdit, FaSearch, FaRegFrown } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import AddClass from "../components/AddClass";

const Class = () => {
  const [classes, setClasses] = useState([]);
  const [search, setSearch] = useState("");
  const [showAddClassForm, setShowAddClassForm] = useState(false);
  const [currentClass, setCurrentClass] = useState(null); // For editing

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/class");
        const data = await res.json();
        setClasses(data?.data);
      } catch (error) {
        console.error("Error fetching classes:", error);
      }
    };
    fetchClasses();
  }, []);

  const filteredClasses = classes?.filter(
    (cls) =>
      cls.subject.toLowerCase().includes(search.toLowerCase()) ||
      cls.teacherName.toLowerCase().includes(search.toLowerCase())
  );

  const getSubjectColor = (subject) => {
    switch (subject.toLowerCase()) {
      case "math":
        return "bg-lime-100 text-lime-700";
      case "science":
        return "bg-blue-100 text-blue-700";
      case "english":
        return "bg-purple-100 text-purple-700";
      case "history":
        return "bg-yellow-100 text-yellow-700";
      case "biology":
        return "bg-green-100 text-green-700";
      case "physics":
        return "bg-indigo-100 text-indigo-700";
      case "chemistry":
        return "bg-pink-100 text-pink-700";
      case "geography":
        return "bg-teal-100 text-teal-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  // Open edit modal with selected class
  const handleEdit = (cls) => {
    setCurrentClass(cls);
    setShowAddClassForm(true);
  };

  // Delete class
  const handleDelete = async (cls) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${cls.subject} class?`
    );
    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:5000/api/class/${cls.id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      console.log("Deleted class:", data);
      setClasses(classes.filter((c) => c.id !== cls.id));
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  return (
    <>
      <div className="p-4 md:px-8 md:py-1 bg-gray-100 min-h-screen">
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-lime-600">All Classes</h2>
              <p className="text-gray-600">View and manage class records</p>
            </div>
            <button
              onClick={() => {
                setCurrentClass(null); // Clear previous data for Add
                setShowAddClassForm(true);
              }}
              className="mt-3 md:mt-0 bg-lime-600 text-white px-5 py-2 rounded hover:bg-lime-700 transition cursor-pointer"
            >
              + Add Class
            </button>
          </div>

          {/* Search */}
          <div className="mb-6">
            <form className="flex items-center bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 w-full md:w-1/2 shadow-sm focus-within:ring-2 focus-within:ring-lime-300">
              <FaSearch className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search classes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-400"
              />
            </form>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  {[
                    "ID",
                    "Subject",
                    "Teacher Name",
                    "Students Enrolled",
                    "Actions",
                  ].map((title) => (
                    <th
                      key={title}
                      className={`px-4 py-3 text-left text-gray-700 font-semibold uppercase tracking-wider text-sm ${
                        title === "Actions"
                          ? "text-right w-32 sm:w-40"
                          : title === "Students Enrolled"
                          ? "w-32 sm:w-40"
                          : ""
                      }`}
                    >
                      {title}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-100 text-sm sm:text-base">
                {filteredClasses.length > 0 ? (
                  filteredClasses.map((cls) => (
                    <tr
                      key={cls.id}
                      className="hover:bg-lime-50 transition-colors duration-200"
                    >
                      <td className="px-4 py-3">{cls.id}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-block px-2 py-1 text-xs sm:text-sm font-semibold rounded ${getSubjectColor(
                            cls.subject
                          )}`}
                        >
                          {cls.subject}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-800">
                        {cls.teacherName}
                      </td>
                      <td className="px-4 py-3 text-gray-800 w-32 sm:w-40">
                        20
                      </td>
                      <td className="px-4 py-3 flex gap-2 sm:gap-3 justify-end w-32 sm:w-40">
                        <button
                          onClick={() => handleEdit(cls)}
                          className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 text-yellow-600 rounded-lg hover:text-yellow-700 transition duration-200 cursor-pointer"
                        >
                          <FaEdit size={18} className="sm:text-[20px]" />
                        </button>
                        <button
                          onClick={() => handleDelete(cls)}
                          className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 text-red-600 rounded-lg hover:text-red-700 transition duration-200 cursor-pointer"
                        >
                          <MdDeleteForever
                            size={20}
                            className="sm:text-[22px]"
                          />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="py-8">
                      <div className="flex flex-col items-center justify-center space-y-2 text-center">
                        <FaRegFrown className="text-gray-400 text-3xl" />
                        <p className="text-gray-500 text-lg font-medium">
                          No classes found
                        </p>
                        <p className="text-gray-400 text-sm">
                          Try adjusting your search or add new classes.
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {showAddClassForm && (
        <AddClass
          setShowAddClassForm={setShowAddClassForm}
          currentClass={currentClass}
        />
      )}
    </>
  );
};

export default Class;
