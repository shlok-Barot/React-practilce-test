import React, { createContext, useState, useEffect } from "react";

// Create the context
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  // State to hold user data
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  // Function to add a new user
  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  // Function to update an existing user
  const updateUser = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  // Function to remove a user by ID
  const removeUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  // Function to remove all users
  const removeAllUsers = () => {
    setUsers([]);
  };

  // Function to set the current logged-in user
  const loginUser = (user) => {
    setCurrentUser(user);
  };

  // Function to logout the user
  const logoutUser = () => {
    setCurrentUser(null);
  };

  // Example: Load initial users from local storage (optional)
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  // Save users to local storage whenever it changes (optional)
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <UserContext.Provider
      value={{
        users,
        currentUser,
        addUser,
        updateUser,
        removeUser,
        removeAllUsers,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
