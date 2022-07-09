import {Route, Routes, useNavigate} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import MainLayout from "./layouts/MainLayouts";
import {Dashboard} from "./Pages/Admin/Dashboard";
import {Notes} from "./Pages/Admin/Notes";
import HomePage from "./Pages/HomePage";
import {useAuth0} from "@auth0/auth0-react";
import {useEffect} from "react";

function App() {

    return (
        <>
            <Routes>
                <Route path="/" exact element={<HomePage/>}/>
                <Route
                    path="/dailynotes"
                    element={<ProtectedRoute component={MainLayout}/>}
                >
                    <Route path="dashboard" element={<Dashboard/>}/>
                    <Route path="notes" element={<Notes/>}/>
                </Route>
                <Route
                    path="*"
                    element={
                        <main style={{padding: "1rem"}}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
        </>
    );
}

export default App;
