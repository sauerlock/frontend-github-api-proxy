import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={UserList} />
        <Route path='/users/:username/details' Component={UserDetail}/>
      </Routes>
    </BrowserRouter>
  );

};

export default App;
