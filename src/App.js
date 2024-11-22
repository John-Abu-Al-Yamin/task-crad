import { Routes, Route } from "react-router-dom";
import UserHome from "./components/Users/UserHome";
import UpdateUser from "./components/Users/UpdateUser";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import AddUser from "./components/Users/AddUser";
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 overflow-y-auto">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserHome />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="users/:id" element={<UpdateUser />} />
        </Routes>
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;
