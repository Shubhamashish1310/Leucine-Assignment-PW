import AppRoutes from './router';
// In src/main.jsx or src/App.jsx
import './index.css'; // or './App.css'
export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <h1 className='text-7xl font-bold text-blue-600 bg-red-900'>Shubham</h1>
      <AppRoutes />
    </div>
  );
}
