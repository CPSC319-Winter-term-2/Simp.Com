// import logo from "./logo.svg";
import OrderTracking from "./component/orders/SellerOrderTracking";
import "./App.css";
import Login from "./component/loginComponent/LoginPage";
import ProfilePage from "./component/profileComponent/ProfilePage";
import Cart from "./component/cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavWrapper from "./component/common/NavWrapper";
import ProductBoard from "./component/sellerDashboard/ProductCompactView";
import ProductPage from "./component/sellerDashboard/ProductDetailView";
import BuyerOrderTracking from "./component/orders/BuyerOrderTracking";
import CustomerPageRightContent from "./component/customerPageComponent/CustomerPageRightContent";
import Dashboard from "./component/sellerDashboard/Dashboard";
import useCookie from "react-use-cookie";
import { getCookie } from "react-use-cookie";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const render = () => {
    // if (!token) {
    //   return (
    //     <div className="App">
    //       <BrowserRouter>
    //         <Routes>
    //           <Route
    //             path="/"
    //             element={wrapper(<CustomerPageRightContent />, buyer)}
    //           />
    //           <Route path="/login" element={<Login />} />;
    //         </Routes>
    //       </BrowserRouter>
    //     </div>
    //   );
    // }
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={wrapper(<CustomerPageRightContent />, buyer)}
            />
            <Route path="/login" element={<Login />} />
            <Route
              path="/userX/profile"
              element={wrapper(<ProfilePage />, buyer)}
            />
            <Route
              path="/userX/order_tracking"
              element={wrapper(<BuyerOrderTracking />, buyer)}
            />
            <Route
              path="/sellerX/dashboard"
              element={wrapper(<Dashboard />, seller)}
            />
            <Route
              path="/sellerX/products/"
              element={wrapper(<ProductBoard />, seller)}
            />
            <Route
              path="/sellerX/order_tracking/"
              element={wrapper(<OrderTracking />, seller)}
            />
            <Route
              path="/sellerX/product_page/"
              element={wrapper(<ProductPage />, seller)}
            />
            <Route path="/123" element={wrapper(<ProductPage />, seller)} />
            <Route path="/userX/cart" element={wrapper(<Cart />, buyer)} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  };
  // const token = useSelector((state) => state.login.token);
  // useEffect(() => {
  //   render();
  // }, [token]);
  // console.log(token1);
  // const [token, setToken] = useState(sessionStorage.getItem("jwtToken"));
  // const token = sessionStorage.getItem("jwtToken");

  const wrapper = (component, role) => (
    <NavWrapper role={role}>{component}</NavWrapper>
  );
  let buyer = "buyer";
  let seller = "seller";
  // console.log(token);
  return render();
}

export default App;
