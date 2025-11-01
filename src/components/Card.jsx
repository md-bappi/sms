import { FiBook, FiUserCheck, FiUserMinus, FiUserPlus } from "react-icons/fi";

const cardData = [
  {
    id: 1,
    title: "Total Students",
    count: 100,
    icon: <FiUserPlus size={28} className="text-lime-500" />,
    countColor: "text-lime-600",
  },
  {
    id: 2,
    title: "Total Classes",
    count: 20,
    icon: <FiBook size={28} className="text-blue-500" />,
    countColor: "text-blue-600",
  },
  {
    id: 3,
    title: "Enrolled Students",
    count: 80,
    icon: <FiUserCheck size={28} className="text-green-500" />,
    countColor: "text-green-600",
  },
  {
    id: 4,
    title: "Not Enrolled",
    count: 20,
    icon: <FiUserMinus size={28} className="text-red-500" />,
    countColor: "text-red-600",
  },
];

const Card = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-8">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="flex items-center justify-between px-5 py-6 rounded-xl shadow-md bg-white transition-transform transform hover:scale-105"
        >
          <div>
            <p className="text-gray-500 font-medium">{card.title}</p>
            <h2 className={`text-2xl ${card.countColor} font-normal`}>
              {card.count}
            </h2>
          </div>
          <div className="flex items-center justify-center">{card.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default Card;
