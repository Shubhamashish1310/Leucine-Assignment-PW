import AppRoutes from './router';

import './index.css';
import Navbar from './components/Navbar';
export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Navbar />
      <AppRoutes />
    </div>
  );
}
