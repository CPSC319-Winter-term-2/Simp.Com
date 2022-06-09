// import logo from "./logo.svg";
import OrderTracking from "./component/orders/OrderTracking";
import "./App.css";
import Dashboard from "./component/sellerDashboard/Dashboard";
import Login from "./component/loginComponent/LoginPage";

import ProfilePage from "./component/profileComponent/ProfilePage";

import ItemInCart from "./component/cart/ItemInCart";
import Cart from "./component/cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavWrapper from "./component/common/NavWrapper";
import ProductBoard from "./component/sellerDashboard/ProductCompactView";
import CustomerPageRightContent from "./component/customerPageComponent/CustomerPageRightContent";
// import ChangePassword from "./component/profileComponent/ChangePasswordPage";

function App() {
  const wrapper = (component) => <NavWrapper>{component}</NavWrapper>;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={wrapper(<CustomerPageRightContent />)} />
          <Route path="/login" element={<Login />} />
          <Route path="/userX/profile" element={wrapper(<ProfilePage />)} />
          <Route path="/dashboard" element={wrapper(<Dashboard />)} />
          <Route
            path="/sellerX/products/"
            element={wrapper(<ProductBoard />)}
          />
          <Route
            path="/userX/order_tracking/"
            element={wrapper(<OrderTracking />)}
          />
          <Route path="/userX/cart/" element={wrapper(<Cart />)} />
        </Routes>
      </BrowserRouter>

      {/* <ProfilePage /> */}
      {/* <Dashboard /> */}
      {/* <Cart /> */}
      {/*<OrderTracking /> */}
    </div>
  );
}

export default App;
