import React from "react"
import { Routes, Route, Link, useParams } from "react-router-dom"
import { Layout } from "./CAComponents/layout";
import Home from "./Pages/home";
import Contact from "./Pages/contact";
import Cart from "./CAComponents/cart";
import RouteNotFound from "./Pages/notFound";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
