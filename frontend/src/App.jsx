import AppRoutes from './router';
// In src/main.jsx or src/App.jsx
import './index.css'; // or './App.css'
import Navbar from './components/Navbar';
export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Navbar />
      <AppRoutes />
    </div>
  );
}
