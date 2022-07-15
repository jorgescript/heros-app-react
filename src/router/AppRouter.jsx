import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { DcPage } from "../heros/pages/DCPage";
import { LoginPage } from "../auth/pages/LoginPage";
import { MarvelPage } from "../heros/pages/MarvelPage";
import { Navbar } from "../ui/components/NavBar";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/marvel" element={<MarvelPage />} />
        <Route path="/dc" element={<DcPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Navigate to="/marvel" />} />
      </Routes>
    </>
  );
};
