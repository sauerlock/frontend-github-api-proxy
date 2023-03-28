import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const UserDetail = () => {
  const { username } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userDataRef = useRef(null);
  const [repos, setRepos] = useState([]);

  const getUser = async (url) => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      userDataRef.current = response.data;
      setError(null);
    } catch (error) {
      console.error(error);
      setError('Error fetching user details');
    }
    setLoading(false);
  };

  const getRepos = async (url) => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setRepos(response.data);
      setError(null);
    } catch (error) {
      console.error(error);
      setError('Error fetching user repositories');
    }
    setLoading(false);
  };

  useEffect(() => {
    getUser(`http://localhost:3001/api/users/${username}/details`);
    getRepos(`http://localhost:3001/api/users/${username}/repos`);
  }, [username]);

  return (
    <div className="user-detail-container">
     
      <h1>{userDataRef.current?.login} </h1>
      <Table  bordered hover size='sm' variant="dark">
          <thead>
          <tr>
              <th>ID:</th>
              <th>Login:  </th>
              <th>Profile URL:</th>
              <th>Created at:</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>{userDataRef.current?.id}</td>
              <td>{userDataRef.current?.login}</td>
              <td>{userDataRef.current?.html_url}</td>
              <th>{userDataRef.current?.created_at}</th>
            </tr>
        </tbody>
      </Table> 
      <Table  bordered hover size='sm' variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {repos.map((repo) => (
            <tr key={repo.id}>
              <td>{repo.id}</td>
              <td>{repo.name}</td>
              <td>{repo.html_url}</td>
            </tr>
          ))}
        </tbody>
        <div>
        <Button href="http://localhost:3000" variant="dark"> Back to Main Page </Button>
      </div>
    </Table>
    </div>
  );
};

export default UserDetail;
