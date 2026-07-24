import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Research from "./pages/Research";
import Community from "./pages/Community";
import Meetings from "./pages/Meetings";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import ResearchDetails from "./pages/ResearchDetails";
import CreateResearch from "./pages/CreateResearch";
import MeetingRoom from "./pages/MeetingRoom";
import CreateMeeting from "./pages/CreateMeeting";

import Calls from "./pages/Calls";
function App() {

  return (

    <BrowserRouter>

      <div className="App">


        {/* Navbar */}
        <Navbar />


        {/* Pages */}
        <Routes>


          <Route
            path="/"
            element={<Home />}
          />


          <Route
            path="/research"
            element={<Research />}
          />


          <Route
            path="/research/:id"
            element={<ResearchDetails />}
          />


          <Route
            path="/community"
            element={<Community />}
          />


          <Route
            path="/meetings"
            element={<Meetings />}
          />


          <Route
            path="/create-meeting"
            element={<CreateMeeting />}
          />


          <Route
            path="/meeting/:code"
            element={<MeetingRoom />}
          />


          <Route
            path="/contact"
            element={<Contact />}
          />
<Route
  path="/calls"
  element={<Calls />}
/>

          <Route
            path="/login"
            element={<Login />}
          />


          <Route
            path="/signup"
            element={<Signup />}
          />


          <Route
            path="/profile"
            element={<Profile />}
          />


          <Route
            path="/create-research"
            element={<CreateResearch />}
          />


        </Routes>


        {/* Footer */}
        <Footer />


      </div>

    </BrowserRouter>

  );

}

export default App;