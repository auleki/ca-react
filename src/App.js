import React from 'react';
import './App.scss';
import './Sidebar.scss';
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
} from './components/layout';
import CreateOrder from './components/layout/CreateOrder';
import { Route, Switch } from 'react-router-dom';
import PaymentPage from './components/layout/PaymentPage';
import Experiment from './components/Experiment';
import Quiz from './components/layout/Quiz';
import { AppStyle } from './components/StyledComponents';
import AdminDashboard from './components/layout/AdminDashboard';
import Orders from './components/AdminPages/Orders';
import Clothing from './components/AdminPages/Clothing';
import Subscribers from './components/AdminPages/Subscribers';

const App = () => {
	return (
		<AppStyle>
			<SimpleNav />
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route path="/shopping" component={ShoppingCart} />
				<Route path="/confirm" component={CreateOrder} />
				<Route path="/order-complete" component={OrderCompleted} />
				<Route path="/quiz" component={Quiz} />
				<Route path="/payment" component={PaymentPage} />
				<Route path="/experiment" component={Experiment} />
				<Route path="/admin" component={AdminDashboard} />
				<Route path="/admin/orders" component={Orders} />
				<Route path="/admin/clothing" component={Clothing} />
				<Route path="/admin/quiz" component={Quiz} />
				<Route path="/admin/history" component={History} />
				<Route path="/admin/subscribers" component={Subscribers} />
				<Route component={NotFound} />
			</Switch>
			<Footer />
		</AppStyle>
	);
};

export default App;
