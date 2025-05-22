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
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-blue-400">
          User Access System
        </h1>

        {user ? (
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-300">
              Hi, <span className="font-medium">{user.username}</span> ({user.role})
            </span>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-md transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-4 text-sm">
            <Link
              to="/login"
              className="hover:text-blue-400 transition duration-200"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="hover:text-blue-400 transition duration-200"
            >
              Signup
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
