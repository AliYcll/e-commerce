import { Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ProductDetailPage from './pages/ProductDetailPage'

function App() {
  return (
    <>
      <ToastContainer />
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
        {/* Other routes can be added here */}
      </Switch>
    </>
  )
}

export default App
