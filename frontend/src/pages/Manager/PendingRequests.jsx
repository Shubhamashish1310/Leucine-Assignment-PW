import { useEffect, useState } from 'react';
import api from '../../services/api';

const PendingRequests = () => {
  const [requests, setRequests] = useState([]);
  const [error, setError] = useState('');

  const fetchRequests = async () => {
    try {
      const res = await api.get('/requests');
      setRequests(res.data.data);
    } catch (err) {
      setError('Failed to fetch requests');
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await api.patch(`/requests/${id}`, { status });
      fetchRequests(); // Refresh list
    } catch (err) {
      alert('Failed to update status');
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Pending Access Requests</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {requests.length === 0 ? (
        <p>No pending requests.</p>
      ) : (
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">User</th>
              <th className="border px-4 py-2">Software</th>
              <th className="border px-4 py-2">Access Type</th>
              <th className="border px-4 py-2">Reason</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((r) => (
              <tr key={r.id}>
                <td className="border px-4 py-2">{r.user.username}</td>
                <td className="border px-4 py-2">{r.software.name}</td>
                <td className="border px-4 py-2">{r.accessType}</td>
                <td className="border px-4 py-2">{r.reason}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => updateStatus(r.id, 'Approved')}
                    className="bg-green-600 text-white px-2 py-1 mr-2 rounded"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => updateStatus(r.id, 'Rejected')}
                    className="bg-red-600 text-white px-2 py-1 rounded"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PendingRequests;
