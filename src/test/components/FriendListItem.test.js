import React from 'react';
import ReactDOM from 'react-dom';
import FriendListItem from '../../components/FriendListItem';

it('renders without crashing for FriendListItem', () => {
  const div = document.createElement('div');
  const mockedFunc = function(){ return true;};
  ReactDOM.render(<FriendListItem key={1} id={1} name={'test'} starFriend={mockedFunc} starred={true} gender={'Male'} addGender={mockedFunc}/>, div);
});

