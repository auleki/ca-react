import React from 'react'
import './App.scss'
import './Sidebar.scss'
import 'react-toastify/dist/ReactToastify.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {
  ShoppingCart,
  // Header,
  Footer,
  // SubscribeForm,
  // SubscribeSuccess,
  NotFound,
  OrderCompleted,
  SimpleNav,
  Homepage
} from './components/layout'
import CreateOrder from './components/layout/CreateOrder'
import { Route, Switch } from 'react-router-dom'
import PaymentPage from './components/layout/PaymentPage'
import Experiment from './components/Experiment'
import AboutUs from './components/AboutUs'
import Quiz from './components/layout/Quiz'
import { AppStyle } from './components/StyledComponents'
import AdminDashboard from './components/layout/AdminDashboard'
import UBlocked from './components/AdminPages/Users/UBlocked'
import Winners from './components/AdminPages/Quiz/Winners'
import Highscores from './components/AdminPages/Quiz/Highscores'
// import QBlocked from './components/AdminPages/Quiz/QBlocked'
import COrders from './components/AdminPages/Clothing/COrders'
import CRecent from './components/AdminPages/Clothing/CRecent'
import Settings from './components/AdminPages/Settings/Settings'
import USubscribers from './components/AdminPages/Users/USubscribers'

const App = () => {
  return (
    <AppStyle>
      <SimpleNav />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shopping' component={ShoppingCart} />
        <Route path='/confirm' component={CreateOrder} />
        <Route path='/order-complete' component={OrderCompleted} />
        <Route path='/quiz' component={Quiz} />
        <Route path='/about' component={AboutUs} />
        <Route path='/payment' component={PaymentPage} />
        <Route path='/experiment' component={Experiment} />
        <Route path='/admin' component={AdminDashboard} />
        <Route path='/admin/history' component={History} />
        <Route path='/admin/users/subscribers' component={USubscribers} />
        <Route path='/admin/users/blocked' component={UBlocked} />
        <Route path='/admin/quiz/winners' component={Winners} />
        <Route path='/admin/quiz/highscores' component={Highscores} />
        {/* <Route path='/admin/quiz/blocked' component={QBlocked} /> */}
        <Route path='/admin/clothing/orders' component={COrders} />
        <Route path='/admin/clothing/recent' component={CRecent} />
        <Route path='/admin/settings' component={Settings} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </AppStyle>
  )
}

export default App
