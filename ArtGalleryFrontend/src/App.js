import logo from "./logo.svg";
import { BrowserRouter as Router, Switch as Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArtistLogin from "./components/ArtistLogin";
import CustomerLogin from "./components/CustomerLogin";
import AdminLogin from "./components/Admin/AdminLogin";
import ArtistWelcome from "./components/ArtistWelcome";
import ArtistReg from "./components/ArtistReg";
import CustomerReg from "./components/CustomerReg";
import Order from "./components/ArtistOrder";
import Product from "./components/ArtistProduct";
import ErrorPage from "./components/ErrorPage";
import CustomProduct from "./components/CustomProduct";
import CustomerWelcome from "./components/CustomerWelcome";
import CustomerProduct from "./components/CustomerProduct";
import CustomerCart from "./components/CustomerCart";
import TermsandCondition from "./components/TermsAndCondition";
import CustomerPay from "./components/CustomerPay";
import CustomerProfile from "./components/CustomerProfile";
import ArtistProfile from "./components/ArtistProfile";
import AuthenticatedRoute from "./components/AuthenticateRoute";
import AdminWelcome from "./components/Admin/AdminWelcome";
import ForgotPassword from "./components/ForgotPassword";
import ArtistList from "./components/Admin/ArtistList";
import CustomerList from "./components/Admin/CustomerList";
import CustomerUpdate from "./components/Admin/CustomerUpdate";
import Adminproduct from "./components/Admin/Adminproduct";
import OrdersList from "./components/Admin/OrdersList";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/artist-login" component={ArtistLogin} />
          <Route path="/customer-login" component={CustomerLogin} />
          <Route path="/admin-login" component={AdminLogin} />
          <Route path="/admin-customerupdate" component={CustomerUpdate} />
          <AuthenticatedRoute path="/Admin-product" component={Adminproduct} />
          <AuthenticatedRoute path="/orders-list" component={OrdersList} />

          <AuthenticatedRoute path="/artist-reg" component={ArtistReg} />
          <AuthenticatedRoute path="/Customer-reg" component={CustomerReg} />
          <Route path="/artist-list" component={ArtistList} />
          <Route path="/customer-list" component={CustomerList} />
          <AuthenticatedRoute path="/customer-product" component={CustomerProduct} />
          <AuthenticatedRoute path="/customer/profile" component={CustomerProfile} />
          <AuthenticatedRoute path="/artist-welcome/:username" component={ArtistWelcome} />
          <AuthenticatedRoute path="/artist-order/:username" component={Order} />
          <AuthenticatedRoute path="/artist-product" component={Product} />
          <AuthenticatedRoute path="/artist/custom-product" component={CustomProduct}  />
          <AuthenticatedRoute path="/artist-product/add-product/starrynight" component={Product}  />
          <AuthenticatedRoute path="/customer-welcome/:username" component={CustomerWelcome}/>
          <AuthenticatedRoute path="/customer-myCart" component={CustomerCart} />
          <Route path="/terms-condition" component={TermsandCondition} />
          <AuthenticatedRoute path="/customer-pay/:payment" component={CustomerPay} />
          <AuthenticatedRoute path="/artist/profile" component={ArtistProfile} />
          <AuthenticatedRoute path="/admin-welcome/:username" component={AdminWelcome}/>
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="*" component={ErrorPage} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;
