import { Key, useState, useEffect } from 'react';
import { useForm } from '../hooks/useForm';

interface FormData {
  email: string;
  userName: string;
  age: string;
}

export const Form = () => {
  const [values, setValues] = useState<FormData | Object | any>([]);

  const { handleChange, form, setForm } = useForm<FormData>({
    email: '',
    userName: '',
    age: '',
  });

  useEffect(() => {
    setForm({
      email: '',
      userName: '',
      age: '',
    });
  }, [values]);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setValues([...values, form]);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        autoCapitalize="off"
        className="d-flex justify-content-between gap-4"
      >
        <div className="mb-4 w-100">
          <label htmlFor="InputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="InputName"
            name="userName"
            onChange={handleChange}
            value={form.userName}
          />
        </div>

        <div className="mb-4 w-100">
          <label htmlFor="InputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="InputEmail1"
            name="email"
            onChange={handleChange}
            value={form.email}
          />
        </div>

        <div className="mb-4 w-100">
          <label htmlFor="InputAge" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="InputAge"
            name="age"
            onChange={handleChange}
            value={form.age}
          />
        </div>
        <input
          value="send"
          className="btn btn-outline-primary d-block"
          type="submit"
        />
      </form>

      <table className="table text-white-50">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {values.map(({ email, userName, age }: FormData, i: Key) => (
            <tr key={i}>
              <td>{userName}</td>
              <td>{age}</td>
              <td>{email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
