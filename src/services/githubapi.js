import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api/users';

export const getUsers = async (since) => {
  const response = await axios.get(`${API_BASE_URL}/users`, {
    params: { since },
  });
  return response.data;
};

export const getUserDetails = async (username) => {
  const response = await axios.get(`${API_BASE_URL}/users/${username}/details`);
  return response.data;
};

export const getUserRepos = async (username) => {
  const response = await axios.get(`${API_BASE_URL}/users/${username}/repos`);
  return response.data;
};
