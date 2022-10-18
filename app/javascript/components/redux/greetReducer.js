// Base URL
const url = 'http://[::1]:3000/api/v1/root';

// Actions
const GETGREETINGS = 'http://[::1]:3000/api/v1/root/GET_GREETINGS';

// Action Creators

export const getGreetingApi = () => async (dispatch) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const apiData = await response.json();
  const greetArr = apiData.map((greet) => {
    const newGreet = {
      greet_id: greet.id,
      greeting: greet.greet,
    };
    return newGreet;
  });
  dispatch({
    type: GETGREETINGS,
    payload: greetArr,
  });
};

// Reducer

export default function greetingReducer(state = [], action) {
  switch (action.type) {
    case GETGREETINGS:
      return action.payload;
    default:
      return state;
  }
}