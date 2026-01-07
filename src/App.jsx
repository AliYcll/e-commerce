import { Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import HomePage from './pages/HomePage'

function App() {
  return (
    <>
      <ToastContainer />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/shop">
          {/* Shop Page Placeholder */}
          <div>Shop Page (Coming Soon)</div>
        </Route>
        {/* Other routes can be added here */}
      </Switch>
    </>
  )
}

export default App
