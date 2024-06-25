import "./App.css";
import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/Home";
import FaqPage from "./components/faq";
import Products from "./components/Product";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ShoppingCartDemo from "./components/shoppingcart";
import Api from "./components/api";
import Offers from "./components/offers";
import LoginPage from "./components/login";
import RegistrationPage from "./components/registration";
import ContactUsPage from "./components/contactus";
import CheckoutPage from "./components/checkout";
import UserInfoPage from "./components/userDetails";

function App() {
  return (
    <div>
      <main>
        <section>
          <Router>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/Product" element={<Products />} />
              <Route path="/api" element={<Api />} />
              <Route path="/contactus" element={<ContactUsPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/userdetails" element={<UserInfoPage />} />
              <Route
                exact
                path="/registration"
                element={<RegistrationPage />}
              />
              <Route
                exact
                path="/shoppingcart"
                element={<ShoppingCartDemo />}
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
          </Router>
        </section>
      </main>
    </div>
  );
}

export default App;
