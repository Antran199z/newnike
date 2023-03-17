import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavSub from "./component/Navbar/NavSub";
function App() {
  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NavSub />}>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      {/* <Homepage/> */}
    </div>
  );
}

export default App;
