import React from 'react';
import { fetchData } from './util/redux/action';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const users = useSelector(storeData => storeData.user);

  const handleFetchData = () => {
    dispatch(fetchData());
  };

  return (
    <>
      <button onClick={handleFetchData}>GET DATA</button>

      {users.map((e) => (
        <fieldset key={e.id}>
          <legend>{e.username}</legend>
          <h1>Name: <u>{e.name}</u> </h1>
          <h1>Email: <u>{e.email}</u></h1>
        </fieldset>
      ))}
    </>
  );
};

export default App;