import Homepage from "./pages/Home.jsx";
import Navbar from "./component/shared/Navbar.jsx";
import MyTasks from "./pages/MyTasks.jsx";
import './App.css'

function App() {

  return (
    <div>
      <Navbar />
      <Homepage />
      <MyTasks />
    </div>
  )
}

export default App
