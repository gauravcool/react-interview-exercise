import React from 'react';
import ReactDOM from 'react-dom';
import AddFriendInput from '../../components/AddFriendInput';

it('renders without crashing for AddFriendInput with empty list', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddFriendInput addFriend={function(){ return true;}} addGender={function(){}} friends={[]}/>, div);
});

it('renders without crashing for AddFriendInput with list', () => {
    const div = document.createElement('div');
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
    ReactDOM.render(<AddFriendInput addFriend={function(){ return true;}} addGender={function(){}} friends={friends}/>, div);
});
