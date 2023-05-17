import { Form } from "react-router-dom";
export default function Login() {
  return (
    <Form className="absolute right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 p-3">
      <label htmlFor="username">
        User Name:
        <input className="block p-0.5 ml-0.5" name="username" id="username" type="text" required></input>
      </label>
      <label htmlFor="password">
        Password:
        <input className="block p-0.5" name="password" id="password" type="password" required></input>
      </label>
      <button className="bg-green-900 p-2 rounded-lg text-white mt-2">Login</button>
    </Form>
  );
}
