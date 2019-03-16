import React from 'react';
import ReactDOM from 'react-dom';
import FriendList from '../../components/FriendList';

it('renders without crashing for FriendList with empty list', () => {
  const div = document.createElement('div');
  const mockedFunc = function(){ return true;};
  const actions = {
    addFriend: mockedFunc,
    deleteFriend: mockedFunc,
    starFriend: mockedFunc,
    addGender: mockedFunc
  };
  ReactDOM.render(<FriendList actions={actions} friends={[]}/>, div);
});

it('renders without crashing for FriendList with list', () => {
    const div = document.createElement('div');
    const mockedFunc = function(){ return true;};
    const friends= [
        {
            name: 'Theodore Roosevelt',
            starred: true,
            gender: 'Male'
        },
        {
            name: 'Abraham Lincoln',
            starred: false
        },
        {
            name: 'George Washington',
            starred: false
        }
    ];
    const actions = {
      addFriend: mockedFunc,
      deleteFriend: mockedFunc,
      starFriend: mockedFunc,
      addGender: mockedFunc
    };
    ReactDOM.render(<FriendList actions={actions} friends={friends}/>, div);
  });

