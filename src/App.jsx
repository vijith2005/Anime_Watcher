import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import AnimeDetails from "./pages/AnimeDetails";
import WatchEpisode from "./pages/WatchEpisode";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Trending from "./pages/Trending";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>

          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search" element={<Search />} />
          <Route path="/anime/:id" element={<AnimeDetails />} />
          <Route path="/watch/:id/:ep" element={<WatchEpisode />} />
            <Route path="/watch/trending" element={<Trending />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
