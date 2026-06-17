import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CreateAccount from "./pages/NewaccPage";
import WelcomePage from "./pages/WelcomePage";
import SettingPage from "./pages/SettingPage";
import AboutUs from "./pages/AboutUs";
import GestureLayout from "./pages/gesture/GestureLayout";
import LearnGestures from "./pages/gesture/LearnGestures";
import Alphabets from "./pages/gesture/Alphabets";
import Numbers from "./pages/gesture/Numbers";
import Words from "./pages/gesture/Words";
import DetectionPage from "./pages/DetectionPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/NewaccPage" element={<CreateAccount />} />
        <Route path="/welcome" element={<WelcomePage />} />
         <Route path="/learn" element={<GestureLayout />}>
         <Route index element={<LearnGestures/>}/>
          <Route path="all" element={<LearnGestures />} />
          <Route path="alphabets" element={<Alphabets />} />
          <Route path="numbers" element={<Numbers />} />
          <Route path="words" element={<Words />} />
          </Route>
          <Route path="/setting" element={<SettingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/detect" element={<DetectionPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;