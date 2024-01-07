// App.js
import React from 'react';
import UserList from './UserList';
import './App.css'; // Import your CSS file if you created one

function App() {
  return (
    <div className="user-container">
      <h1>User List</h1>
      <UserList />
    </div>
  );
}

export default App;
