import Login from "./Components/Login/login"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Static/Navbar";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import SideBar from "./Components/Static/SideBar2";

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          {/* <Login/> */}
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/login" element={<Login/>} />
        </Routes>
        <Footer/>
      </Router>

    </>
  );
}

export default App;
{/* <Router>
        <>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  youtubes={user ? user.youtube : ""}
                  timelines={user ? user.timeline : ""}
                  skills={user ? user.skills : ""}
                />
              }
            />
            <Route path="/about" element={<About about={user ? user.about : ""} />} />
            <Route
              path="/projects"
              element={<Projects projects={user ? user.projects : ""} />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/account"
              element={isAuthenticated ? <AdminPanel /> : <Login />}
            />
            <Route
              path="/admin/timeline"
              element={isAuthenticated ? <Timeline /> : <Login />}
            />
            <Route
              path="/admin/youtube"
              element={isAuthenticated ? <Youtube /> : <Login />}
            />

            <Route
              path="/admin/project"
              element={isAuthenticated ? <Project /> : <Login />}
            />
          </Routes>

          <Footer />
        </>
    </Router> */}