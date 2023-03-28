  import React, { useState, useEffect } from 'react';
  import axios from 'axios';
  import { Link } from 'react-router-dom';
  import { Table } from 'react-bootstrap';
  import '../index.css';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import Button from 'react-bootstrap/Button';
  import Container from 'react-bootstrap/Container';
  import Row from 'react-bootstrap/Row';
  import Col from 'react-bootstrap/Col';

  const UserList = () => {
    const [users, setUsers] = useState([]);
    const [nextLink, setNextLink] = useState(null);
    const [prevLink, setPrevLink] = useState(null);
    const [loading, setLoading] = useState(true);

    const getUsers = async (url) => {
      setLoading(true);
      try {
        const searchParams = new URLSearchParams(window.location.search);
        const since = searchParams.get('since') || '0';
        const response = await axios.get(`${url}?since=${since}`);
        setUsers(response.data.users);
        setNextLink(response.data.nextLink);
        setPrevLink(response.data.prevLink);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    

    useEffect(() => {
      getUsers('http://localhost:3001/api/users');
    }, []);

    const handleNext = () => {
      if (nextLink) {
        const since = new URLSearchParams(nextLink.split('?')[1]).get('since');
        getUsers(`http://localhost:3001/api/users?since=${since}&per_page=10`);
      }
    };

    const handlePrev = () => {
      if (prevLink) {
        const since = new URLSearchParams(prevLink.split('?')[1]).get('since');
        getUsers(`http://localhost:3001/api/users?since=${since}&per_page=10`);
      }
    };    
  

    return (
      <Container fluid>
        <Row>
          <Col>
            <div className="user-list-container">
              <h1>GitHub Api User List</h1>
              {loading ? (
                <p>Loading...</p>
              ) : (
                <div className="tableList">
                  <Table bordered hover size='sm' variant="dark">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Login</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user.id}>
                          <td>{user.id}</td>
                          <td>
                            <Link to={`/users/${user.login}/details`}>{user.login}</Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  <div className="paginationButtons">
                    <Button variant="secondary  " onClick={handleNext} disabled={!nextLink}>
                      Next
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    );
  };

  export default UserList