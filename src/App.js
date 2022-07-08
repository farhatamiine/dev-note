import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayouts/MainLayout";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  const { isAuthenticated } = useAuth0();
  let navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) return navigate("/dashboard");
  }, [isAuthenticated, navigate]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<MainLayout />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </>
  );
}

export default App;
