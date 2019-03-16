import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.css';
import FriendListItem from './FriendListItem';

class FriendList extends Component {
  constructor(props) {
    super(props);
    this.initialPageState();
    this.handleClick = this.handleClick.bind(this);
  }
  // set the initial default selected page
  initialPageState() {
    this.state = {
      currentPage: 1
    };
  }

  // handle the page selection on the click of page number
  handleClick(event) {
    this.setState({
      currentPage : Number(event.target.id) 
    });
    if(document.getElementsByClassName('activeList')[0]) {
      document.getElementsByClassName('activeList')[0].className = '';
    }
    event.target.className = 'activeList';
  }

  // preparing pagination element
  preparePageElement(key, value) {
    return (
      <li key={key} id={value} onClick={this.handleClick}>
        {key}&nbsp;
      </li>
    );
  }
  
  render () {
    // Logic for displaying allowed number of friends on the page
    const indexOfLast = this.state.currentPage * 2;
    let actualIndex = 0;
    if (this.state.currentPage > 1) {
      actualIndex = (this.state.currentPage - 1)  * 2;
    }
    const indexOfFirst = indexOfLast - 2;
    const currentfriends = this.props.friends.slice(indexOfFirst, indexOfLast);
    
    // Logic for fetching page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.friends.length / 2); i++) {
      pageNumbers.push(i);
    }
  
    // get the pageNumbers Element
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        this.preparePageElement(number, number)
      );
    });
    
    return (
      <div>
        <ul className={styles.friendList}>
          {
            currentfriends.map((friend, index) => {
              return (
                <FriendListItem
                  key={index}
                  id={index + actualIndex }
                  name={friend.name}
                  starred={friend.starred}
                  gender={friend.gender}
                  {...this.props.actions} />
              );
            })
          }
        </ul>
        <ul className={styles.pageNumbers}>
            {this.preparePageElement('<<<', 1)}
            {renderPageNumbers}
            {this.preparePageElement('>>>', pageNumbers.length)}
        </ul>
      </div>
    );
  }
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default FriendList;
