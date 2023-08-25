import React,{ useEffect , useState } from "react";
import "./App.css";
// import { connect } from 'react-redux'
import * as All from "./Export";
import { BrowserRouter as Router,Routes,Route, Navigate } from "react-router-dom";
// import { topbar } from "react-router-loading";
// import { Routes, Route } from "react-router-loading";
// import { useSelector, useDispatch } from 'react-redux'

// import { 
// 	onSwitchTheme,
// } from './redux/actions/Action';


const Routing = (props) => {
 
  return (
    <>
      <Routes>
        <Route exact path="/" element={<All.Home />} />
        <Route exact path="/login" element={<All.Login />} />
        <Route exact path="/register" element={<All.Login />} />
        <Route exact path="/cart" element={<All.Cart />} />
        <Route exact path="/checkout" element={<All.Checkout />} />
        <Route exact path="/product-details/:slug" element={<All.ProductDetails />} />
        <Route exact path="/products" element={<All.Products />} />        
        <Route exact path="/404" element={<All.PageNotFound />} />
        <Route exact path="*" element={<Navigate to="/404" />} />
      </Routes>
    </>
  );
};

function App() {
 
  return (
    <Router>   
        <All.Header/>
          <Routing/>
        <All.Footer />            
        <All.Sidebar />            
    </Router>
  );
}

export default App;
