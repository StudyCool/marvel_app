import React, {Component} from 'react';
import Avatar from '../Avatar';

import styles from './UserCard.styles.module.css';

class UserCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {
    return (
        <>
          <Avatar style={{
            width: '48px',
            height: '48px',
            borderRadius: '100%',
            objectFit: 'cover'
          }}
                  src={this.props.coach.profilePic}/>
          <div
              className={styles.fullName}>{this.props.coach.firstName} {this.props.coach.lastName} </div>
          ,
          <div className={styles.level}>Level {this.props.coach.level}</div>
        </>

    );
  }

}

export default UserCard;