import React, {Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './FriendListItem.css';
import AddGenderInput from './AddGenderInput';
class FriendListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelectBoxShown: false
    };
  }
  // Adding the Gender from displayed list of friend
  addGender(e){
    this.props.addGender(this.props.id, e.target.value);
    this.setState({
      isSelectBoxShown: false
    });
  }

  enableSelectBox() {
    this.setState({
      isSelectBoxShown: true
    });
  }

  render() {
    // preparing the content for the display for a gender
    const gender = this.props.gender || '';
    let displayGender = '';
    if (!!this.props.gender) {
      displayGender = 'Sex: ' + this.props.gender;
    }
    return (
      <li className={styles.friendListItem}>
        <div className={styles.friendInfos}>
          <div><span>{this.props.name}</span></div>
          <div>
            <small>xx friends in common</small>
            {this.state.isSelectBoxShown && <div>
              <AddGenderInput addGender={this.addGender.bind(this)} gender={gender}></AddGenderInput>
            </div>}
          </div>
          {!this.state.isSelectBoxShown && <span>{displayGender}</span>}
        </div>
        <div className={styles.friendActions}>
          <button className={`genderLogo btn btn-default ${styles.btnAction}`}
            onClick={this.enableSelectBox.bind(this)}>
            
          </button>
          <button className={`btn btn-default ${styles.btnAction}`}
                  onClick={() => this.props.starFriend(this.props.id)}>
            <i className={classnames('fa', {
              'fa-star': this.props.starred,
              'fa-star-o': !this.props.starred
            })} />
          </button>
          <button className={`btn btn-default ${styles.btnAction}`}
                  onClick={() => this.props.deleteFriend(this.props.id)}>
            <i className="fa fa-trash" />
          </button>
        </div>
      </li>
    );
  }

}

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  starred: PropTypes.bool,
  gender: PropTypes.string,
  starFriend: PropTypes.func.isRequired,
  addGender: PropTypes.func.isRequired
};

export default FriendListItem
