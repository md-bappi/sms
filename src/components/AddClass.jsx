import { useState, useEffect, useRef } from "react";
import { FaDeleteLeft } from "react-icons/fa6";

const AddClass = ({ setShowAddClassForm, currentClass }) => {
  const modalRef = useRef();
  const [subject, setSubject] = useState("");
  const [teacherName, setTeacherName] = useState("");

  // Prefill modal if editing
  useEffect(() => {
    if (currentClass) {
      setSubject(currentClass.subject);
      setTeacherName(currentClass.teacherName);
    } else {
      setSubject("");
      setTeacherName("");
    }
  }, [currentClass]);

  const handleOutsideClick = (e) => {
    if (modalRef.current === e.target) setShowAddClassForm(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentClass) {
      // Update only teacher name
      try {
        const res = await fetch(
          `http://localhost:5000/api/class/${currentClass.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ teacherName }),
          }
        );
        const data = await res.json();
        console.log("Updated class:", data);
      } catch (error) {
        console.error("Update failed:", error);
      }
    } else {
      // Add new class
      try {
        const res = await fetch("http://localhost:5000/api/class/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ subject, teacherName }),
        });
        const data = await res.json();
        console.log("Added new class:", data);
      } catch (error) {
        console.error("Add failed:", error);
      }
    }

    setShowAddClassForm(false);
  };

  return (
    <div
      ref={modalRef}
      onClick={handleOutsideClick}
      className="fixed inset-0 backdrop-blur-sm bg-white/30 flex justify-center items-center z-50 transition"
    >
      <div className="bg-white w-11/12 max-w-md rounded-2xl shadow-xl p-6 relative animate-fadeIn border border-gray-200">
        {/* Header */}
        <div className="flex justify-between items-start mb-5">
          <div>
            <h2 className="text-2xl font-bold text-lime-600">
              {currentClass ? "Edit Class" : "Add New Class"}
            </h2>
            <p className="text-gray-500 text-sm">
              {currentClass
                ? "Update the class information below."
                : "Enter the class information below."}
            </p>
          </div>
          <button
            onClick={() => setShowAddClassForm(false)}
            className="text-gray-400 hover:text-red-500 transition cursor-pointer"
          >
            <FaDeleteLeft size={22} />
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Subject
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className={`w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-lime-300 outline-none shadow-sm ${
                currentClass ? "bg-gray-100 cursor-not-allowed" : "bg-white"
              }`}
              placeholder="Enter subject"
              required
              disabled={!!currentClass} // Block input when editing
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Teacher Name
            </label>
            <input
              type="text"
              value={teacherName}
              onChange={(e) => setTeacherName(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-lime-300 outline-none shadow-sm"
              placeholder="Enter teacher name"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-lime-600 text-white py-2.5 rounded-lg font-medium hover:bg-lime-700 transition shadow-md cursor-pointer"
          >
            {currentClass ? "Update Class" : "Add Class"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
