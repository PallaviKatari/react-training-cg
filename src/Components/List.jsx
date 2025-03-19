import { useState, useEffect } from "react";
import React from "react";

const List = () => {
  const data = [
    {
      id: 1,
      class: "11th",
      age: "17",
    },
    {
      id: 2,
      class: "12th",
      age: "18",
    },
    {
      id: 3,
      class: "10th",
      age: "17",
    },
    {
      id: 4,
      class: "9th",
      age: "18",
    },
  ];

  return (
    <>
      <ul>
        {data.map((students) => (
          <li key={students.id}>
            {students.class}-{students.age}
          </li>
        ))}
      </ul>
      <hr />
      <ListAPI />
    </>
  );
};

const ListAPI = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://gorest.co.in/public/v2/users")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}-{user.email}</li>
      ))}
    </ul>
  );
};

export default List;
