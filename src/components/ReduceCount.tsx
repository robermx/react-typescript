import { useReducer } from 'react';

const initialState = {
  count: 10,
};

type ActionType =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'CUSTOM'; payload: number };

const reducerCounter = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };

    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };

    case 'CUSTOM':
      return {
        ...state,
        count: action.payload,
      };

    default:
      return state;
  }
};

export const ReduceCount = () => {
  const [{ count }, dispatch] = useReducer(reducerCounter, initialState);
  return (
    <div className="mt-3 ">
      <h3>ReducerCount</h3>
      <p>Count : {count}</p>
      <button
        onClick={() => dispatch({ type: 'DECREMENT' })}
        className="btn btn-outline-primary"
      >
        Decrement
      </button>

      <button
        onClick={() => dispatch({ type: 'CUSTOM', payload: 10 })}
        className="btn btn-outline-danger"
      >
        Reset
      </button>

      <button
        onClick={() => dispatch({ type: 'INCREMENT' })}
        className="btn btn-outline-primary"
      >
        Increment
      </button>
    </div>
  );
};
