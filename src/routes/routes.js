import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import PublicLayout from '../features/layout/PublicLayout';
import PrivateLayout from '../features/layout/PrivateLayout';
import FarmVisitComparisonV2 from '../features/farm-visit/fvcompare/FarmVisitComparisonV2';
import FVApproveWithCompare from '../features/farm-visit/fvcompare/fvApproveWithCompare';

const Login = lazy(() => import('../pages/Login'));
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Dashboard = lazy(() => import('../features/dashboard/Dashboard'));
const SustainabilityDashboard = lazy(() => import('../features/sustainabilityDashboard/index'));
const DashboardFeature = lazy(() => import('../features/sustainabilityDashboard/Dashboard'));
const Wetmills = lazy(() => import('../features/wetmill/index'));
const TrainingGroup = lazy(() => import('../features/training-group/TrainingGroup'));
const Tgdetail = lazy(() => import('../features/training-group/tgdetail/Tgdetail'));
// Import Training Session Pages
const TrainingSession = lazy(() => import('../features/training-session'));
const Tsdetail = lazy(() => import('../features/training-session/ts-detail'));
const TSApprove = lazy(() => import('../features/training-session/ts-approve'));

const Participants = lazy(() => import('../features/participants/Participants'));
const Partdetail = lazy(() => import('../features/participants/partdetail/Partdetail'));

const AAPerfomance = lazy(() => import('../pages/AAPerformance'));
const FTPerformance = lazy(() => import('../pages/FTPerformance'));

const FarmVisit = lazy(() => import('../features/farm-visit/FarmVisit'));
const FarmVisitApp = lazy(() => import('../features/farm-visit/fvapprove/fvApprove'));

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
      { path: 'farmvisit/compare', element: <FVApproveWithCompare /> },
      {
        path: 'farmvisit/compare/:householdId',
        element: <FarmVisitComparisonV2 />,
      },
      { path: 'performance/aa', element: <AAPerfomance /> },
      { path: 'performance/ft', element: <FTPerformance /> },
      { path: 'manage', element: <Management /> },
      { path: 'profile', element: <Profile /> },
      { path: 'sustainability/summary', element: <SustainabilityDashboard /> },
      { path: 'sustainability/wetmills', element: <Wetmills /> },
      { path: 'sustainability/dashboards', element: <DashboardFeature /> }
    ],
  },
  { path: '*', element: <NotFound /> },
];