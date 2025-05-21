import {Routes, Route } from 'react-router-dom';
import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';
import CreateSoftware from '../pages/Admin/CreateSoftware';
import RequestAccess from '../pages/Employee/RequestAccess';
import PendingRequests from '../pages/Manager/PendingRequests';
import ProtectedRoute from './ProtectedRoute';
import Home from '../pages/Home';

export default function AppRoutes() {
  return (
    
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

<Route path="/" element={<Home />} />


        <Route
          path="/create-software"
          element={
            <ProtectedRoute allowedRoles={['Admin']}>
              <CreateSoftware />
            </ProtectedRoute>
          }
        />


        <Route
          path="/request-access"
          element={
            <ProtectedRoute allowedRoles={['Employee']}>
              <RequestAccess />
            </ProtectedRoute>
          }
        />


        <Route
          path="/pending-requests"
          element={
            <ProtectedRoute allowedRoles={['Manager']}>
              <PendingRequests />
            </ProtectedRoute>
          }
        />
      </Routes>
    
  );
}
