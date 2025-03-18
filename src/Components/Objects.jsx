import { useState } from 'react';

const ArrayObjects = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice', status: 'active' },
    { id: 2, name: 'Bob', status: 'inactive' },
    { id: 3, name: 'Charlie', status: 'pending' }
  ]);

  // Define a name mapping for status values
  const statusName = {
    active: 'Active',
    inactive: 'In Active',
    pending: 'Pending',
  };

    // Define a name mapping for status values
    const statusColor = {
        active: 'green',
        inactive: 'red',
        pending: 'yellow',
      };

  return (
    <div>
      <h2>User Status</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} style={{color:statusColor[user.status]}}>
            {user.name} - {statusName[user.status] }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArrayObjects;
