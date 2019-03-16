import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './AddFriendInput.css';
import AddGenderInput from './AddGenderInput';

class AddFriendInput extends Component {
  render () {
    return (
      <div className={styles.friendsList}>
        <input
        type="text"
        autoFocus="true"
        className={classnames('form-control', styles.addFriendInput)}
        placeholder="Type the name of a friend"
        value={this.state.name}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleSubmit.bind(this)} />
        <AddGenderInput addGender={this.addGender.bind(this)} gender={this.state.gender}/>
      </div>
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
      gender: this.props.gender || ''
    };
  }
  // Callback used for changing the state of gender on the selection
  addGender(e) {
    this.setState({ gender: e.target.value });
  }

  handleChange (e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit (e) {
    const name = e.target.value.trim();
    if (e.which === 13) {
      this.props.addFriend(name);
      this.setState({ name: '' });
      // Logic to save the gender
      if (this.state.gender !== '') {
        this.props.addGender((this.props.friends.length),this.state.gender);
        this.setState({ gender: '' });
      }
    }
  }

}

AddFriendInput.propTypes = {
  addFriend: PropTypes.func.isRequired,
  addGender: PropTypes.func.isRequired
};

export default AddFriendInput
