import axios from 'axios';
import { useState } from 'react';

export const fetchLogin = async ({ email, password }) => {
  try {
    const response = await axios.post('http://localhost:8031/api/auth/login', {
      email,
      password,
    });

    if (response.status === 200) {
      return localStorage.setItem('token', JSON.stringify(response.data));
    } else {
      return console.log('Login failed.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
