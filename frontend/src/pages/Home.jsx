import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      if (user.role === 'Admin') navigate('/create-software');
      else if (user.role === 'Manager') navigate('/pending-requests');
      else if (user.role === 'Employee') navigate('/request-access');
    } else {
      navigate('/login');
    }
  }, [user, navigate]);

  return <div className="p-10 text-center">Redirecting...</div>;
};

export default Home;
