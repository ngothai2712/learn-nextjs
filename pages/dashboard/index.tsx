import AuthLayout from '@/layouts/AuthLayout';
import { useState } from 'react';

const Dashboard = () => {
  const [count, setCount] = useState(0);

  return (
    <AuthLayout>
      <h1>Dashboard page</h1>

      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </AuthLayout>
  );
};

export default Dashboard;
