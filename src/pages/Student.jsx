import { useState } from "react";
import { FaEdit, FaSearch, FaRegFrown } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import AddStudent from "../components/AddStudent";

const sampleStudents = [
  { id: 1, name: "Bappy", age: 20, email: "bappy@gmail.com", subject: "Math" },
  {
    id: 2,
    name: "Rahim",
    age: 21,
    email: "rahim@gmail.com",
    subject: "Science",
  },
  {
    id: 3,
    name: "Karim",
    age: 19,
    email: "karim@gmail.com",
    subject: "English",
  },
  {
    id: 4,
    name: "Nabila",
    age: 22,
    email: "nabila@gmail.com",
    subject: "History",
  },
  { id: 5, name: "Rina", age: 20, email: "rina@gmail.com", subject: "Biology" },
  {
    id: 6,
    name: "Sakib",
    age: 23,
    email: "sakib@gmail.com",
    subject: "Physics",
  },
  {
    id: 7,
    name: "Tania",
    age: 21,
    email: "tania@gmail.com",
    subject: "Chemistry",
  },
  { id: 8, name: "Jahid", age: 20, email: "jahid@gmail.com", subject: "Math" },
  {
    id: 9,
    name: "Rashed",
    age: 22,
    email: "rashed@gmail.com",
    subject: "Geography",
  },
  {
    id: 10,
    name: "Shila",
    age: 19,
    email: "shila@gmail.com",
    subject: "English",
  },
];

const Student = () => {
  const [students] = useState(sampleStudents);
  const [search, setSearch] = useState("");
  const [showAddStudentForm, setShowAddStudentForm] = useState(false);

  console.log(showAddStudentForm);

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.email.toLowerCase().includes(search.toLowerCase()) ||
      student.subject.toLowerCase().includes(search.toLowerCase())
  );

  // Function to get subject badge color
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

  return (
    <>
      <div className="p-4  md:px-8 md:py-1 bg-gray-100 min-h-screen">
        {/* Parent container */}
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-lime-600">All Students</h2>
              <p className="text-gray-600">View and manage student records</p>
            </div>
            <button
              onClick={() => setShowAddStudentForm(true)}
              className="mt-3 md:mt-0 bg-lime-600 text-white px-5 py-2 rounded hover:bg-lime-700 transition cursor-pointer"
            >
              + Add Student
            </button>
          </div>

          {/* Search */}
          <div className="mb-6">
            <form className="flex items-center bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 w-full md:w-1/2 shadow-sm focus-within:ring-2 focus-within:ring-lime-300">
              <FaSearch className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search students..."
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
                  {["ID", "Name", "Age", "Email", "Subject", "Actions"].map(
                    (title) => (
                      <th
                        key={title}
                        className={`px-6 py-3 text-left text-gray-700 font-semibold uppercase tracking-wider ${
                          title === "Actions" ? "text-right" : ""
                        }`}
                      >
                        {title}
                      </th>
                    )
                  )}
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-100">
                {filteredStudents.length > 0 ? (
                  filteredStudents.map((student) => (
                    <tr
                      key={student.id}
                      className="hover:bg-lime-50 transition-colors duration-200"
                    >
                      {/* ID Badge */}
                      <td className="px-6 py-3">
                        <span>{student.id}</span>
                      </td>

                      {/* Name, Age, Email */}
                      <td className="px-6 py-3 text-gray-800">
                        {student.name}
                      </td>
                      <td className="px-6 py-3 text-gray-800">{student.age}</td>
                      <td className="px-6 py-3 text-gray-800">
                        {student.email}
                      </td>

                      {/* Subject Badge */}
                      <td className="px-6 py-3">
                        <span
                          className={`inline-block px-2 py-1 text-sm font-semibold rounded ${getSubjectColor(
                            student.subject
                          )}`}
                        >
                          {student.subject}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-3 flex gap-3 justify-end">
                        <button className="flex items-center justify-center w-9 h-9 text-yellow-600 rounded-lg hover:text-yellow-700 transition duration-200 cursor-pointer">
                          <FaEdit />
                        </button>
                        <button className="flex items-center justify-center w-9 h-9 text-red-600 rounded-lg hover:text-red-700 transition duration-200 cursor-pointer">
                          <MdDeleteForever size={22} />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="py-8">
                      <div className="flex flex-col items-center justify-center space-y-2 text-center">
                        <FaRegFrown className="text-gray-400 text-3xl" />
                        <p className="text-gray-500 text-lg font-medium">
                          No students found
                        </p>
                        <p className="text-gray-400 text-sm">
                          Try adjusting your search or add new students.
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

      {showAddStudentForm && (
        <AddStudent setShowAddStudentForm={setShowAddStudentForm} />
      )}
    </>
  );
};

export default Student;
