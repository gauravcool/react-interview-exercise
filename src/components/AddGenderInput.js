import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './AddGenderInput.css';

class AddGenderInput extends Component {
    constructor (props) {
        super(props);
        this.addGender = this.props.addGender.bind(this);
    }
    render () {
        const genderList = [{option: "Select A Gender", value: '', id: 1}, {option: "Male", value: 'Male',id: 2}, {option: "Female", value: 'Female', id: 3}];
        return (
            <select className={style.genderSelect} onChange={this.addGender.bind(this)} value={this.props.gender}>
                {genderList.map((item) => { return (<option key={item.id} value={item.value}>{item.option}</option>);})}
            </select>
        );
    }
}

AddGenderInput.propTypes = {
  addGender: PropTypes.func.isRequired
};

export default AddGenderInput
