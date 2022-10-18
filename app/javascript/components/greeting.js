import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getGreetingApi } from './redux/greetReducer';

function Greeting() {
  const greetings = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!greetings.length) {
      dispatch(getGreetingApi());
    }
  }, []);

  return (
    <h1>Hello from greeting component!</h1>
  );
}

export default Greeting;