import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Class from "./pages/Class";
import Student from "./pages/Student";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/class" element={<Class />} />
        <Route path="/student" element={<Student />} />
      </Routes>
    </div>
  );
};

export default App;
