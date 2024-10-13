import React from "react"
import { Routes, Route} from "react-router-dom"
import { Layout } from "./layouts/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import RouteNotFound from "./pages/NotFound";
import Post from "./pages/Post";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="/product/:id" element={<Post />} />
          <Route path="CheckoutSuccessPage" element={<CheckoutSuccessPage />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
