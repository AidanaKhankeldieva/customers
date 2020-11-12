import React, { Component } from "react";

export default class AddCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastName: "",
      avatar: "",
      email: "",
      state: "",
      phone: "",
      payment: "",
      courses: "",
      role: "",
      github: "",
    };
  }
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log("event: ", event.target);
    console.log("input is:", event.target.value);
  };

  add = () => {
    console.log("this is add func");
    this.props.addCustomer(this.state);
  };
  render() {
    const {
      name,
      lastName,
      avatar,
      email,
      state,
      phone,
      payment,
      courses,
      role,
      github,
    } = this.state;
    return (
      <div>
        <form className='form' action=''>
          <label htmlFor=''>
            Name
            <input
              type='text'
              name='name'
              value={name}
              onChange={this.onChange}
              placeholder='name'
            />
          </label>
          <label htmlFor=''>
            LastName
            <input
              type='text'
              value={lastName}
              name='lastName'
              onChange={this.onChange}
              placeholder='lastName'
            />
          </label>
          <label htmlFor=''>
            Avatar
            <input
              type='text'
              value={avatar}
              name='avatar'
              onChange={this.onChange}
              placeholder='avatar'
            />
          </label>
          <label htmlFor=''>
            Email
            <input
              type='email'
              value={email}
              name='email'
              onChange={this.onChange}
              placeholder='email'
            />
          </label>
          <label htmlFor=''>
            State
            <input
              type='text'
              value={state}
              name='state'
              onChange={this.onChange}
              placeholder='state'
            />
          </label>
          <label htmlFor=''>
            Phone
            <input
              type='text'
              value={phone}
              name='phone'
              onChange={this.onChange}
              placeholder='phone'
            />
          </label>
          <label htmlFor=''>
            Payment
            <input
              type='text'
              value={payment}
              name='payment'
              onChange={this.onChange}
              placeholder='payment'
            />
          </label>
          <label htmlFor=''>
            Courses
            <input
              type='text'
              value={courses}
              name='courses'
              onChange={this.onChange}
              placeholder='courses'
            />
          </label>
          <label htmlFor=''>
            Role
            <input
              type='text'
              value={role}
              name='role'
              onChange={this.onChange}
              placeholder='role'
            />
          </label>
          <label htmlFor=''>
            Github
            <input
              type='text'
              value={github}
              name='github'
              onChange={this.onChange}
              placeholder='github'
            />
          </label>
        </form>
        <button onClick={this.add}>Add</button>
        <button>Cancel</button>
      </div>
    );
  }
}
