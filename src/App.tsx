import Counter from './components/Counter';
import { ParentTimer } from './components/ParentTimer';
import { User } from './components/User';
import { ReduceCount } from './components/ReduceCount';
import { Form } from './components/Form';

function App() {
  return (
    <div className="my-5">
      <h1 className="text-center">
        <span className="badge bg-primary">React + Typescrpt</span>
      </h1>
      <h2 className="mt-5">UseEfect</h2>
      <hr />
      <Counter />
      <User />
      <h2 className="mt-5">useState - useRef</h2>
      <hr />
      <ParentTimer />
      <h2 className="mt-5">useReducer</h2>
      <hr />
      <ReduceCount />
      <h2 className="mt-5">CustomHooks</h2>
      <hr />
      <Form />
    </div>
  );
}

export default App;
