import { useForm } from '../hooks/useForm';

interface FormData {
  email: string;
  userName: string;
  age: number;
}

export const Form = () => {
  const { handleChange, form } = useForm<FormData>({
    email: '',
    userName: '',
    age: 15,
  });

  return (
    <>
      <form
        autoCapitalize="off"
        className="d-flex justify-content-between gap-4"
      >
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
          />
        </div>

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
          />
        </div>
      </form>
      <pre>{JSON.stringify(form)}</pre>
    </>
  );
};
