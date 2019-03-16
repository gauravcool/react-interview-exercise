import React from 'react';
import ReactDOM from 'react-dom';
import AddGenderInput from '../../components/AddGenderInput';

it('renders without crashing with Male as gender param', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddGenderInput addGender={function(){}} gender={'Male'}/>, div);
});
it('renders without crashing with Female as gender param', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddGenderInput addGender={function(){}} gender={'Female'}/>, div);
});
it('renders without crashing with empty as gender param', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddGenderInput addGender={function(){}} gender={''}/>, div);
});
