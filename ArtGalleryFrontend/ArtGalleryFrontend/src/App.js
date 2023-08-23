import logo from "./logo.svg";
import { BrowserRouter as Router, Switch as Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FarmerLogin from "./components/ArtistLogin";
import BuyerLogin from "./components/CustomerLogin";
import AdminLogin from "./components/Admin/AdminLogin";
import FarmerWelcome from "./components/ArtistWelcome";
import FarmerReg from "./components/ArtistReg";
import BuyerReg from "./components/CutomerReg";
import Order from "./components/ArtistOrder";
import Product from "./components/ArtistProduct";
import ErrorPage from "./components/ErrorPage";
import CustomProduct from "./components/CustomProduct";
import BuyerWelcome from "./components/CustomerWelcome";
import BuyerProduct from "./components/CustomProduct";
import BuyerCart from "./components/CustomerCart";
import TermsandCondition from "./components/TermsAndCondition";
import BuyerPay from "./components/CustomerPay";
import BuyerProfile from "./components/CustomerProfile";
import FarmerProfile from "./components/CustomerProfile";
import AuthenticatedRout from "./components/AuthenticateRout";
import AdminWelcome from "./components/Admin/AdminWelcome";
import ForgotPassword from "./components/ForgotPassword";
import FarmerList from "./components/Admin/ArtistList";
import BuyerList from "./components/Admin/CustomerList";
import BuyerUpdate from "./components/Admin/CustomerUpdate";
import Adminproduct from "./components/Admin/Adminproduct";
import OrdersList from "./components/Admin/OrdersList";
import customerLogin from "./components/CustomerLogin";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/artist-login" component={AdminLogin} />
          <Route path="/customer-login" component={customerLogin} />
          <Route path="/admin-login" component={AdminLogin} />
          <Route path="/admin-customerupdate" component={CustomerUpdate} />
          <AuthenticatedRout path="/Admin-product" component={Adminproduct} />
          <AuthenticatedRout path="/orders-list" component={OrdersList} />

          <AuthenticatedRout path="/artist-reg" component={ArtistReg} />
          <AuthenticatedRout path="/customer-reg" component={CustomerReg} />
          <Route path="/artist-list" component={ArtistList} />
          <Route path="/customer-list" component={CustomerList} />
          <AuthenticatedRout path="/customer-product" component={CustomerProduct} />
          <AuthenticatedRout path="/customer/profile" component={CustomerProfile} />
          <AuthenticatedRout
            path="/artist-welcome/:username"
            component={ArtistWelcome}
          />
          <AuthenticatedRout path="/artist-order/:username" component={Order} />
          <AuthenticatedRout path="/artist-product" component={Product} />
          <AuthenticatedRout
            path="/artist/custom-product"
            component={CustomProduct}
          />
          <AuthenticatedRout
            path="/artist-product/add-product/wheat"
            component={Product}
          />
          <AuthenticatedRout
            path="/customer-welcome/:username"
            component={CustomerWelcome}
          />
          <AuthenticatedRout path="/customer-myCart" component={customerCart} />
          <Route path="/terms-condition" component={TermsandCondition} />
          <AuthenticatedRout path="/customer-pay/:payment" component={CustomerPay} />
          <AuthenticatedRout path="/artist/profile" component={ArtistProfile} />
          <AuthenticatedRout
            path="/admin-welcome/:username"
            component={AdminWelcome}
          />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="*" component={ErrorPage} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;
