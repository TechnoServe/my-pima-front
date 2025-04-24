import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import PublicLayout from '../features/layout/PublicLayout';
import PrivateLayout from '../features/layout/PrivateLayout';

const Login = lazy(() => import('../pages/Login'));
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Dashboard = lazy(() => import('../features/dashboard/Dashboard'));
const SustainabilityDashboard = lazy(() => import('../features/sustainabilityDashboard/index'));
const DashboardFeature = lazy(() => import('../features/sustainabilityDashboard/Dashboard'));
const SustainabilityReports = lazy(() => import('../features/SustainabilityReport/SustainabilityReports'));
const Wetmills = lazy(() => import('../features/wetmill/index'));
const TrainingGroup = lazy(() => import('../pages/TrainingGroup'));
const TrainingSession = lazy(() => import('../pages/TrainingSession'));
const AAPerfomance = lazy(() => import('../pages/AAPerformance'));
const FTPerformance = lazy(() => import('../pages/FTPerformance'));
const Tgdetail = lazy(() => import('../features/tgdetail/Tgdetail'));
const Tsdetail = lazy(() => import('../features/tsdetail/Tsdetail'));
const Partdetail = lazy(() => import('../features/partdetail/Partdetail'));
const TSApprove = lazy(() => import('../features/tsapprove/tsapprove'));
const FarmVisit = lazy(() => import('../pages/FarmVisit'));
const FarmVisitApp = lazy(() => import('../features/fvapprove/fvApprove'));
const Participants = lazy(() => import('../pages/Participants'));
const Management = lazy(() => import('../pages/Management'));
const Profile = lazy(() => import('../pages/Profile'));

export const appRoutes = [
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { path: '/', element: <Navigate to='/login' replace /> },
      { path: 'login', element: <Login /> },
      { path: 'forgot', element: <ForgotPassword /> },
    ],
  },
  {
    path: '/in',
    element: (
      <ProtectedRoute>
        <PrivateLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: '', element: <Dashboard /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'traingroup', element: <TrainingGroup /> },
      { path: 'traingroup/:id', element: <Tgdetail /> },
      { path: 'trainsession', element: <TrainingSession /> },
      { path: 'trainsession/:id', element: <Tsdetail /> },
      { path: 'trainsession/verification', element: <TSApprove /> },
      { path: 'participants', element: <Participants /> },
      { path: 'participants/:id', element: <Partdetail /> },
      { path: 'farmvisit', element: <FarmVisit /> },
      { path: 'farmvisit/verification', element: <FarmVisitApp /> },
      { path: 'performance/aa', element: <AAPerfomance /> },
      { path: 'performance/ft', element: <FTPerformance /> },
      { path: 'manage', element: <Management /> },
      { path: 'profile', element: <Profile /> },
      { path: 'sustainability/summary', element: <SustainabilityDashboard /> },
      { path: 'sustainability/wetmills', element: <Wetmills /> },
      { path: 'sustainability/dashboards', element: <DashboardFeature />}
    ],
  },
  { path: '*', element: <NotFound /> },
];