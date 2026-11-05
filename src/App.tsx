import { BrowserRouter, Routes, Route } from "react-router";
import { MainLayout } from "./layouts/MainLayout";
import Home from "./pages/Home";
import { Products } from "./pages/Products";
import { NotFound } from "./pages/NotFound";
import { ScrollToTop } from "./components/ScrollToTop";
import { Contact } from "./pages/Contact";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { About } from "./pages/About";
import { TrackOrder } from "./pages/TrackOrder";
import { Login } from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<h1>Services</h1>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order" element={<h1>Order</h1>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
