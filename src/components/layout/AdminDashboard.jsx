import React from 'react'
// import { Switch, Route } from 'react-router-dom';
import { AdminPage, WrapAdmin } from '../StyledComponents'
import TestSideNav from './TestSideNav'

const AdminDashboard = () => {
  // const baseUrl = '/admin'
  return (
    <AdminPage>
      {/* <AdminNav /> */}
      <TestSideNav />
      <WrapAdmin>
        <h2>BUSZZ</h2>
      </WrapAdmin>
    </AdminPage>
  )
}

export default AdminDashboard
