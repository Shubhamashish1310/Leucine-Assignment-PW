import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">User Access System</h1>

      {user ? (
        <div className="flex gap-4 items-center">
          <span className="text-sm">Hi, {user.username} ({user.role})</span>
          <button onClick={handleLogout} className="bg-red-600 px-3 py-1 rounded">
            Logout
          </button>
        </div>
      ) : (
        <div className="flex gap-4">
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/signup" className="hover:underline">Signup</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
