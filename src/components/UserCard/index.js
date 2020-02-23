import React, {Component} from 'react';
import Avatar from '../Avatar';

class UserCard extends Component {
  constructor(props) {
    super(props);


    this.state = {};


  }

  render() {
    console.log(this.props.coach.profilePic);
    return (
        <div style={{
          listStyle: 'none',
          width: '375px',
          height: '72px',
          borderBottom: '#E6EAEE'
        }}>
          <Avatar className={'avatar'}
                  src={this.props.coach.profilePic}/> {this.props.coach.firstName}: {this.props.coach.lastName} ,
          level: {this.props.level}

        </div>);
  }

}

export default UserCard;