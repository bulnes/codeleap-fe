import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import { MainPage } from "./pages/main.tsx";
import { SignUpPage } from "./pages/sign-up.tsx";
import { ProtectedRoutes } from "./utils/protected-routes.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<SignUpPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<MainPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
