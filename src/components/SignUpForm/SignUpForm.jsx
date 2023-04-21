import React, { Component } from 'react'
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {

  // state is always an object with a property for each "piece" of state
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      // Create user on the server
      const { name: username, password, email } = this.state;
      const data = {
        username,
        secret: password,
        email,
        first_name: '',
        last_name: '',
        custom_json: {},
      };
      // Sign up the user in the client
      const formData = { ...this.state };
      delete formData.error;
      delete formData.confirm;
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value, error: '' })
  }


  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
<div>
<form onSubmit={this.handleSubmit} className="absolute right-20 top-40 py-3  w-2/5 sm:mx-auto bg-gradient-to-t rounded-lg shadow-md">
    <div className="mb-6">
        <label  className="relative left mb-2 text-sm font-medium text-blue-700 dark:text-black">Name</label>
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="mx-auto shadow-sm bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-3 bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name" required />
    </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-blue-700 dark:text-black">Your email</label>
        <input type="email" name='email' value={this.state.email} id="email" onChange={this.handleChange} className=" mx-auto shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-3 bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="email@email.com" required />
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your password</label>
        <input type="password" name='password' value={this.state.password} id="password" onChange={this.handleChange} className="mx-auto shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-3 bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Confirm password</label>
        <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} className="mx-auto shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-3 bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
      </div>
      <div className="flex items-start mb-6" />
      <button type="submit" disabled={disable} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>
    </form>
    </div>
    );
  }

}

