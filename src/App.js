import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./components/LandingPage";
import ProfileHomePage from "./components/ProfileHomePage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/:id/profile" element={<ProfileHomePage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
