import { useState } from 'react';

interface User {
  uid: string;
  userName: string;
}

const tempUswr: User = {
  uid: 'xxxxxx',
  userName: 'John Doe',
};

export const User = () => {
  const [user, setUser] = useState<User>(tempUswr);

  const login = (): void => {
    setUser({
      uid: 'abc123',
      userName: 'Roberto Arenas',
    });
  };

  return (
    <div className="mt-3">
      <h3>User</h3>
      <button onClick={login} className="btn btn-outline-primary">
        Login
      </button>
      <pre className="mt-3">{JSON.stringify(user)}</pre>
    </div>
  );
};
