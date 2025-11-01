import { useState } from "react";

const sampleClasses = [
  {
    id: 1,
    subject: "Mathematics 101",
    teacher: "Dr. Sarah Johnson",
    enrolled: 12,
    capacity: 20,
  },
  {
    id: 2,
    subject: "Science 101",
    teacher: "Dr. Ali Rahman",
    enrolled: 15,
    capacity: 25,
  },
  {
    id: 3,
    subject: "English 101",
    teacher: "Ms. Nabila Khan",
    enrolled: 10,
    capacity: 20,
  },
  {
    id: 4,
    subject: "History 101",
    teacher: "Mr. Karim Ahmed",
    enrolled: 18,
    capacity: 30,
  },
  {
    id: 5,
    subject: "Biology 101",
    teacher: "Dr. Rina Akter",
    enrolled: 8,
    capacity: 15,
  },
  {
    id: 6,
    subject: "Physics 101",
    teacher: "Mr. Sakib Hasan",
    enrolled: 20,
    capacity: 25,
  },
  {
    id: 7,
    subject: "Chemistry 101",
    teacher: "Ms. Tania Rahman",
    enrolled: 14,
    capacity: 20,
  },
  {
    id: 8,
    subject: "Geography 101",
    teacher: "Mr. Jahid Islam",
    enrolled: 9,
    capacity: 15,
  },
  {
    id: 9,
    subject: "Mathematics 102",
    teacher: "Dr. Sarah Johnson",
    enrolled: 11,
    capacity: 20,
  },
  {
    id: 10,
    subject: "Science 102",
    teacher: "Dr. Ali Rahman",
    enrolled: 16,
    capacity: 25,
  },
];

const ClassEnrollment = () => {
  const [classes] = useState(sampleClasses);

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-lime-600">Class Enrollment</h2>
        <p className="text-gray-600">Students enrolled per class</p>
      </div>

      {/* Classes List */}
      <div className="space-y-4">
        {classes.map((cls) => {
          const progress = (cls.enrolled / cls.capacity) * 100;
          return (
            <div key={cls.id} className="bg-white p-4 rounded-xl shadow-md">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {cls.subject}
                  </h3>
                  <p className="text-sm text-gray-500">{cls.teacher}</p>
                </div>
                <h3 className="text-gray-800 font-medium">
                  <span className="font-bold">{cls.enrolled}</span> /{" "}
                  {cls.capacity} students
                </h3>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-3 bg-lime-500 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClassEnrollment;
