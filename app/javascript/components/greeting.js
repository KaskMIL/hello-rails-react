import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getGreetingApi } from './redux/greetReducer';

function Greeting() {
  const greetings = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  const [currentGreet, setGreet] = useState({greeting: ''});

  useEffect(() => {
    if (!greetings.length) {
      dispatch(getGreetingApi());
    }
  }, []);

  const randomGreeting = (greetings) => {
    const random = (Math.floor(Math.random() * greetings.length)) + 1;
    greetings.map((greet) => {
      if (greet.greet_id == random) {
        setGreet({...currentGreet, greeting: greet.greeting});
      }
    });
  };

  return (
    <div>
    <h1>Greeting Generator</h1>
    <button onClick={() => randomGreeting(greetings)}>Generate random greet!</button>
    <div>
      {currentGreet.greeting ? (
        <h2>{currentGreet.greeting}</h2>
      ) : null}
    </div>
    </div>
  );
}

export default Greeting;