import { useState, useEffect } from 'react';
import api from '../../services/api';

const RequestAccess = () => {
  const [softwares, setSoftwares] = useState([]);
  const [form, setForm] = useState({
    softwareId: '',
    accessType: '',
    reason: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchSoftwares = async () => {
      try {
        const res = await api.get('/software');
        setSoftwares(res.data.data);
      } catch (err) {
        setError('Failed to load software list');
      }
    };

    fetchSoftwares();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      await api.post('/requests', form);
      setSuccess('Access request submitted!');
      setForm({ softwareId: '', accessType: '', reason: '' });
    } catch (err) {
      setError(err.response?.data?.message || 'Submission failed');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Request Software Access</h2>

      <form onSubmit={handleSubmit}>
        <select
          name="softwareId"
          value={form.softwareId}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
          required
        >
          <option value="">Select Software</option>
          {softwares.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>

        <select
          name="accessType"
          value={form.accessType}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
          required
        >
          <option value="">Select Access Type</option>
          <option value="Read">Read</option>
          <option value="Write">Write</option>
          <option value="Admin">Admin</option>
        </select>

        <textarea
          name="reason"
          placeholder="Reason for access"
          value={form.reason}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
          required
        />

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        {success && <p className="text-green-600 text-sm mb-2">{success}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default RequestAccess;
