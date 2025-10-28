import React from "react";
import Home from "./Components/Home";
import Restaurant from "./Components/Restaurant";
import { BrowserRouter, Routes, Route } from "react-router";
import RestaurantMenu from "./Components/RestaurantMenu";
import SearchFood from "./Components/SearchFood";
import SecondaryHome from "./Components/SecondaryHome";
import { store } from "./Stored/stores";
import { Provider } from "react-redux";
import Checkout from "./Components/Checkout";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<SecondaryHome />}>
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/city/delhi/:id" element={<RestaurantMenu />} />
            <Route path="/city/delhi/:id/search" element={<SearchFood />} />
          </Route>
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;



// Proxy server "https://cors-anywhere.herokuapp.com/"; 


