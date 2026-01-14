import { Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ProductDetailPage from './pages/ProductDetailPage'
import CartPage from './pages/CartPage'
import CreateOrderPage from './pages/CreateOrderPage'
import OrderSuccessPage from './pages/OrderSuccessPage'
import PreviousOrdersPage from './pages/PreviousOrdersPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PricingPage from './pages/PricingPage'
import TeamPage from './pages/TeamPage'
import ProductPage from './pages/ProductPage'
import BlogPage from './pages/BlogPage'
import PagesPage from './pages/PagesPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ScrollToTop from './components/common/ScrollToTop'

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { verifyToken } from './store/actions/clientActions';
import { fetchCategories } from './store/actions/productActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyToken());
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <>
      <ScrollToTop />
      <ToastContainer autoClose={1500} />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/shop/:gender/:category/:categoryId/:productNameSlug/:productId">
          <ProductDetailPage />
        </Route>
        <Route path="/shop/:gender/:categoryName">
          <ShopPage />
        </Route>
        <Route exact path="/shop">
          <ShopPage />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path="/order">
          <CreateOrderPage />
        </Route>
        <Route path="/order-success">
          <OrderSuccessPage />
        </Route>
        <Route path="/my-orders">
          <PreviousOrdersPage />
        </Route>
        <Route path="/product">
          <ProductPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/blog">
          <BlogPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/pages">
          <PagesPage />
        </Route>
        <Route path="/pricing">
          <PricingPage />
        </Route>
        <Route path="/team">
          <TeamPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <RegisterPage />
        </Route>
        {/* Other routes can be added here */}
      </Switch>
    </>
  )
}

export default App
