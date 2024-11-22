import { createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = "https://jsonplaceholder.typicode.com/users";

// Async thunk to fetch users
export const getUsers = createAsyncThunk("user/getUsers", async (_, thunkAPI) => {
  try {
    const response = await fetch(baseURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Async thunk to add a user
export const addUser = createAsyncThunk("user/addUser", async (user) => {
  try {
    const response = await fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
});

// Async thunk to update a user
export const updateUser = createAsyncThunk("user/updateUser", async (user) => {
  try {
    const response = await fetch(`${baseURL}/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
});

// Async thunk to delete a user
export const deleteUser = createAsyncThunk("user/deleteUser", async (id) => {
  try {
    await fetch(`${baseURL}/${id}`, {
      method: "DELETE",
    });
    return id;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
});
