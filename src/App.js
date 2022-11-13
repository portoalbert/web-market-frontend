import "./App.css";
import Navbar from "./pages/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Women from "./pages/Women";
import Men from "./pages/Men.js";
import Kids from "./pages/Kids.js";
import PageFooter from "./components/PageFooter";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import Wishlist from "./pages/Wishlist";
import NewItem from "./pages/NewItem";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/newitem" element={<NewItem />} />
      </Routes>
      <PageFooter />
    </div>
  );
}

export default App;
