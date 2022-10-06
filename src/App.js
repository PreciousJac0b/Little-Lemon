import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Info from "./pages/Info";
import MealProvider from "./store/meal-context";

function App() {
  return (
    <div className="App">
      <MealProvider>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/info" element={<Info />} />
        </Routes>
      </MealProvider>
    </div>
  );
}

export default App;
