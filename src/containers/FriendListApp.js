import React, { Component } from 'react';
import styles from './FriendListApp.css';
import { connect } from 'react-redux';

import {addFriend, deleteFriend, starFriend, addGender} from '../actions/FriendsActions';
import { FriendList, AddFriendInput } from '../components';

class FriendListApp extends Component {

  render () {
    const { friendlist: { friendsById }} = this.props;

    const actions = {
      addFriend: this.props.addFriend,
      deleteFriend: this.props.deleteFriend,
      starFriend: this.props.starFriend,
      addGender: this.props.addGender
    };

    return (
      <div className={styles.friendListApp}>
        <h1>The FriendList</h1>
        <AddFriendInput addFriend={actions.addFriend} addGender={actions.addGender} friends={friendsById}/>
        <FriendList friends={friendsById} actions={actions} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {
  addFriend,
  deleteFriend,
  starFriend, 
  addGender
})(FriendListApp)
