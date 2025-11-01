import { useRef } from "react";
import { FaDeleteLeft } from "react-icons/fa6";

const AddClass = ({ setShowAddClassForm }) => {
  const modalRef = useRef();

  // Close modal on outside click
  const handleOutsideClick = (e) => {
    if (modalRef.current === e.target) {
      setShowAddClassForm(false);
    }
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
            <h2 className="text-2xl font-bold text-lime-600">Add New Class</h2>
            <p className="text-gray-500 text-sm">
              Enter the class information below.
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
        <form className="space-y-4">
          {/* Subject */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Subject
            </label>
            <div className="relative">
              <select
                name="subject"
                className="w-full appearance-none border border-gray-200 rounded-lg px-3 py-2.5 text-gray-800 focus:ring-2 focus:ring-lime-300 outline-none shadow-sm cursor-pointer transition"
                defaultValue=""
              >
                <option value="" disabled className="text-gray-400">
                  Select subject
                </option>
                <option value="math">Mathematics</option>
                <option value="science">Science</option>
                <option value="english">English</option>
                <option value="history">History</option>
                <option value="biology">Biology</option>
                <option value="physics">Physics</option>
                <option value="chemistry">Chemistry</option>
                <option value="geography">Geography</option>
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                ▼
              </span>
            </div>
          </div>

          {/* Teacher Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Teacher Name
            </label>
            <input
              type="text"
              name="teacher"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-lime-300 outline-none shadow-sm"
              placeholder="Enter teacher name"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-lime-600 text-white py-2.5 rounded-lg font-medium hover:bg-lime-700 transition shadow-md cursor-pointer"
          >
            Add Class
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
