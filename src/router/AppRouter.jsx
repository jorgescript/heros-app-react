import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { HerosRoutes } from "../heros/routes/HerosRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login"
          element={
            <PublicRoutes>
              <LoginPage />
            </PublicRoutes>
          }
        ></Route>

        <Route
          path="/*"
          element={
            <PrivateRoutes>
              <HerosRoutes />
            </PrivateRoutes>
          }
        />
      </Routes>
    </>
  );
};
