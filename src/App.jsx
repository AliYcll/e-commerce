import { Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ProductDetailPage from './pages/ProductDetailPage'
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

function App() {
  return (
    <>
      <ScrollToTop />
      <ToastContainer autoClose={1500} />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/shop/product/:productId/:productNameSlug">
          <ProductDetailPage />
        </Route>
        <Route path="/shop">
          <ShopPage />
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
