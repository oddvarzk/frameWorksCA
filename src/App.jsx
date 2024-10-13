import React from "react"
import { Routes, Route} from "react-router-dom"
import { Layout } from "./layouts/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import RouteNotFound from "./pages/NotFound";
import Post from "./pages/Post";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage";
import Checkout from "./pages/Checkout";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<Post />} />
          <Route path="CheckoutSuccessPage" element={<CheckoutSuccessPage />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
