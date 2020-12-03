import Dashboard from './components/dashboard/Dashboard.js'
import Checkout from './components/checkout/Checkout.js'
import Blog from './components/blog/Blog.js'
import Store from './components/store/Store.js'
import Product from './components/store/Product.js'
import Pricing from './components/pricing/Pricing.js'
import SignIn from './components/sign-in/SignIn.js'
import SignInSide from './components/sign-in-side/SignInSide.js'
import SignUp from './components/sign-up/SignUp.js'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/checkout" component={Checkout}/>
        <Route exact path="/" component={Blog}/>
        <Route exact path="/pricing" component={Pricing}/>
        <Route exact path="/store" component={Store}/>
        <Route exact path="/store/product/:id" component={Product}/>
        <Route exact path="/sign-in" component={SignIn}/>
        <Route exact path="/sign-in-side" component={SignInSide}/>
        <Route exact path="/sign-up" component={SignUp}/>
      </Switch>
    </Router>
  );
}

export default App;
