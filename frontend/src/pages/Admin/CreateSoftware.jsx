import { useState } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';

const CreateSoftware = () => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    accessLevels: [],
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggleAccessLevel = (level) => {
    setForm((prev) => {
      const has = prev.accessLevels.includes(level);
      return {
        ...prev,
        accessLevels: has
          ? prev.accessLevels.filter((l) => l !== level)
          : [...prev.accessLevels, level],
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await api.post('/software', form);
      console.log(res.data);
      alert('Software created!');
      navigate('/'); // or go somewhere else
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create software');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Create Software</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="w-full border px-3 py-2 mb-4 rounded"
          name="name"
          placeholder="Software Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <textarea
          className="w-full border px-3 py-2 mb-4 rounded"
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
        />
        <div className="mb-4">
          <label className="font-semibold block mb-1">Access Levels</label>
          {['Read', 'Write', 'Admin'].map((level) => (
            <label key={level} className="block">
              <input
                type="checkbox"
                checked={form.accessLevels.includes(level)}
                onChange={() => toggleAccessLevel(level)}
                className="mr-2"
              />
              {level}
            </label>
          ))}
        </div>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
 
export default CreateSoftware;
