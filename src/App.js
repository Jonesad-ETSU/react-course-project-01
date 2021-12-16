import React, { useState } from 'react';
import UserAdd from './components/UserAdd';
import Users from './components/Users';

const DUMMY_INFO = [
  { id: 1, name: 'Hello', age: 69 },
  { id: 2, name: 'World', age: 420 }
];

function App() {
  const [usersData, setUsersData] = useState(DUMMY_INFO);
  const addUserHandler = (user) => {
    console.log(user);
    setUsersData((prev) => [user, ...prev]);
    console.log(usersData);
  };
  
  return (
    <>
      <UserAdd onAdd={addUserHandler} />
      <Users items={usersData}/>
    </>
  );
}

export default App;
