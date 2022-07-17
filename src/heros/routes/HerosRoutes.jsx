import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui/components/NavBar";
import { DcPage } from "../pages/DcPage";
import { HeroPage } from "../pages/HeroPage";
import { MarvelPage } from "../pages/MarvelPage";
import { SearchHeroPage } from "../pages/SearchHeroPage";

export const HerosRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/marvel" element={<MarvelPage />} />
          <Route path="/dc" element={<DcPage />} />
          <Route path="/search" element={<SearchHeroPage />} />
          <Route path="/hero/:id" element={<HeroPage />} />
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
