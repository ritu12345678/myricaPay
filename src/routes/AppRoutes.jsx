// src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../layout/Layout';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import UserAgentPage from '../pages/UserAgentPage';
import ComplianceOfficerPage from '../pages/ComplianceOfficerPage';
import UserEndUserPage from '../pages/UserEndUserPage';
import TransactionManagementPage from '../pages/TransactionManagementPage';
import TransactionDetailPage from '../pages/TransactionDetailPage';
import ReportAnalyticsPage from '../pages/ReportAnalyticsPage';
import ReportDetailPage from '../pages/ReportDetailPage';
import ComplianceSecurityPage from '../pages/ComplianceSecurityPage';
import StaticContentManagementPage from '../pages/StaticContentManagementPage';
import CurrencyAndFeesPage from '../pages/CurrencyAndFeesPage';
import HelpChatPage from '../pages/HelpAndChatPage';
import RoleAndAccessPage from '../pages/RoleAndAccessPage';


const AppRoutes = () => {
  return (
    <Routes>
      {/* Public route */}
      <Route path="/" element={<LoginPage />} />

      <Route
        element={
          <Layout />
        }>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>
      <Route
        element={
          <Layout />
        }>
        <Route path="/user/agents" element={<UserAgentPage />} />
      </Route>
      <Route
        element={
          <Layout />
        }>
        <Route path="/user/end-users" element={<UserEndUserPage />} />
      </Route>
      <Route
        element={
          <Layout />
        }>
        <Route path="/transactions" element={<TransactionManagementPage />} />
      </Route>
      <Route
        element={
          <Layout />
        }>
        <Route path="/reports" element={<ReportAnalyticsPage />} />
      </Route>
      <Route
        element={
          <Layout />
        }>
        <Route path="/report-detail" element={<ReportDetailPage />} />
      </Route>
      <Route
        element={
          <Layout />
        }>
        <Route path="/compliance" element={<ComplianceSecurityPage />} />
      </Route>
      <Route
        element={
          <Layout />
        }>
        <Route path="/transactions-detail" element={<TransactionDetailPage />} />
      </Route>
      <Route
        element={
          <Layout />
        }>
        <Route path="/content" element={<StaticContentManagementPage />} />
      </Route>
      <Route
        element={
          <Layout />
        }>
        <Route path="/user/compliance-officers" element={<ComplianceOfficerPage />} />
      </Route>
      <Route
        element={
          <Layout />
        }>
        <Route path="/currency" element={<CurrencyAndFeesPage />} />
      </Route>
       <Route
        element={
          <Layout />
        }>
        <Route path="/help" element={<HelpChatPage/>} />
        <Route path="/roles" element={<RoleAndAccessPage/>} />
      </Route>
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
};

export default AppRoutes;
