import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <>
    <form autoComplete="off" onSubmit={handleSubmit} className="absolute right-20 top-40 py-3 w-2/5 sm:mx-auto bg-gradient-to-t from-grey-600 to-grey-100 rounded-lg shadow-md">
    <div className="mb-6">
        <label className="relative left mb-2 text-sm font-medium text-blue-700 dark:text-black">Email</label>
        <input type="text" name="email" value={credentials.email} onChange={handleChange} required className="mx-auto shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-3 bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="email" />
    </div>
    <div className="mb-6">
        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your password</label>
        <input type="password" name="password" value={credentials.password} onChange={handleChange} className="mx-auto shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-3 bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
      </div>
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit">LOG IN</button>
      {error}
    </form>
    </>
  );
}