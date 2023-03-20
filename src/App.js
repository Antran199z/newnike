import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import DetailProductPage from "./pages/DetailProduct/DetailProduct";
function App() {
  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<NavSub />}>
            </Route> */}
            <Route path="/" element={<HomePage />}></Route>
            {/* <Route
              path="/productDetail/:id"
              element={<DetailProductPage />}
            ></Route> */}
          </Routes>
        </BrowserRouter>
      </div>
      {/* <Homepage/> */}
    </div>
  );
}

export default App;
