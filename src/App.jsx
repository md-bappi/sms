import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Class from "./pages/Class";
import Student from "./pages/Student";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="p-4 md:p-8">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/class" element={<Class />} />
          <Route path="/student" element={<Student />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
