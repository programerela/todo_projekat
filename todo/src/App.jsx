import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Homepage from "./pages/Home.jsx";
import Navbar from "./component/shared/Navbar.jsx";
import MyTasks from "./pages/MyTasks.jsx";
import Footer from "./component/shared/Footer.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

function AppContent() {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/register";

  const hideFooter =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/my-tasks" element={<MyTasks />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
      {!hideFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
