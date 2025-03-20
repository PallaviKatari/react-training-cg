import { useEffect, useState } from 'react'

const ArrayFunctions = () => {
  const [data, setData] = useState([]);
  const userIdToFind = 7779750; // Replace with the desired user ID

  useEffect(() => {
    fetch("https://gorest.co.in/public/v2/users")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  // Find a specific user
  //  const specificUser = data.find((user) => user.id === userIdToFind);

  // return (
  //   <div>
  //     <h2>All Users:</h2>
  //     <ul>
  //       {
  //       data.map((user) => (
  //         <li key={user.id}>{user.name}</li>
  //       ))
  //       }
  //     </ul>

  //     <h2>Specific User:</h2>
  //     {
  //     specificUser ? <p>{specificUser.name}</p> : <p>User not found</p>
  //     }
  //   </div>
  // );

   // Filter users whose names start with "A"
  //  const filteredUsers = data.filter((user) => user.name.startsWith("A"));

  //  return (
  //    <div>
  //      <h2>Filtered Users (Names Starting with "A"):</h2>
  //      <ul>
  //        {filteredUsers.map((user) => (
  //          <li key={user.id}>{user.name}</li>
  //        ))}
  //      </ul>
  //    </div>
  //  );

 // Get the first 5 users from the data
 const slicedUsers = data.slice(7, 10);

 return (
   <div>
     <h2>Showing First 5 Users:</h2>
     <ul>
       {slicedUsers.map((user) => (
         <li key={user.id}>{user.name}</li>
       ))}
     </ul>
   </div>
 );
 }

export default ArrayFunctions;
