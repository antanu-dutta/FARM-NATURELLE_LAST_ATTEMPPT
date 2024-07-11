import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Farms from "./pages/Farms";
import Contact from "./pages/Contact";
import BulkPurchase from "./pages/BulkPurchase";
import Blogs from "./pages/Blogs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndCondition from "./pages/TermsAndCondition";
import ShippingPolicy from "./pages/ShippingPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import ProductDetails from "./pages/ProductDetails";
import Collection from "./pages/Collection";
import Products from "./pages/Products";
import ScrollToTop from "./helper/ScrollToTop";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-farms" element={<Farms />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/bulk-purchase" element={<BulkPurchase />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-condition" element={<TermsAndCondition />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/collection/:id" element={<Products />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
