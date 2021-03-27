import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AdminPage } from '../StyledComponents';
import AdminNav from './AdminNav';
import TestSideNav from './TestSideNav';
import Orders from '../AdminPages/Orders';
import Clothing from '../AdminPages/Clothing';
import Quiz from '../AdminPages/Quiz';
import History from '../AdminPages/History';
import Subscribers from '../AdminPages/Subscribers';

const AdminDashboard = () => {
	// const baseUrl = '/admin'
	return (
		<AdminPage>
			{/* <AdminNav /> */}
			<TestSideNav />
		</AdminPage>
	);
};

export default AdminDashboard;
