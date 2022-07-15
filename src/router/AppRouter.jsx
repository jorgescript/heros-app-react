import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { DcPage } from "../heros/pages/DCPage";
import { MarvelPage } from "../heros/pages/MarvelPage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/marvel" element={<MarvelPage />} />
        <Route path="/dc" element={<DcPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
};
