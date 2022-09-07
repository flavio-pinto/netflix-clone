import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ContentHeader from "./components/ContentHeader";
import Footer from "./components/Footer";
import HeaderNav from "./components/HeaderNav";
import MainContent from "./components/MainContent";
import MovieDetails from "./components/MovieDetails";
import TVShows from "./components/TVShows";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#221f1f" }}>
      <BrowserRouter>
        <HeaderNav />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <ContentHeader />
                <MainContent />
              </div>
            }
          />
          <Route path="/movie-details/:id" element={<MovieDetails />} />
          <Route path="/tv-shows" element={<TVShows />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

