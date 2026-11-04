import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<h1>Our Menu</h1>} />
        <Route path="/services" element={<h1>Services</h1>} />
        <Route path="/about" element={<h1>About Us</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/order" element={<h1>Order</h1>} />
        <Route path="/cart" element={<h1>Cart</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
