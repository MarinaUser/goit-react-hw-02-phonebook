import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export class Form extends Component {
     state = {
    name: '',
    number: '',
  };

  nanoidIdName = nanoid();
  nanoidIdNumber = nanoid();

static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state);
    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({name: '', number: ''});
  };


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nanoidIdName}>
            <input
              type="text"
              name="name"
              id={this.nanoidIdName}
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required/>
            Name</label>
          <label htmlFor={this.nanoidIdNumber}>
            <input     
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              id={this.nanoidIdNumber}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required/>
            Number</label>
          <button type='submit'>Add contact</button>
        </form>
      </div>
    );


};
};