import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./components/Topbar";
import Dashboard from "./components/Dashboard";
import Slide from "./components/Slide";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pricing from "./components/Pricing";
import Profile from "./components/Profile";
import Number from "./components/Number";
import Run from "./components/Run";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/slide" element={<Slide />} />
          <Route path="/profile" element={<Profile />} >
            <Route path="number" element={<Number/>}>
              <Route path="run" element={<Run/>}/>
            </Route>
              
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
