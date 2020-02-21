import React, {Component}  from 'react';
import styles from './UsersList.styles.module.css';
const data = [
  {
    "id": "1",
    "firstName": "Brian",
    "lastName": "McCauley",
    "level": 1,
    "whoIsWho": "coach",
    "profilePic": "https://image.shutterstock.com/image-photo/portrait-smiling-red-haired-millennial-260nw-1194497251.jpg"
  },
  {
    "id": "2",
    "firstName": "Chad",
    "lastName": "Hayes",
    "level": 2,
    "profilePic": "https://image.shutterstock.com/image-photo/bearded-man-260nw-170081504.jpg"
  },
  {
    "id": "3",
    "firstName": "Jeff",
    "lastName": "Buck",
    "level": 2,
    "profilePic": "https://i.pinimg.com/originals/da/ab/05/daab05633e2a899341d6bcf074680241.jpg"
  },
  {
    "id": "4",
    "firstName": "Kenny",
    "lastName": "Griffin",
    "level": 3,
    "profilePic": "https://i.pinimg.com/originals/8f/d9/89/8fd989222039b6ba31045ed887bf5afa.jpg"
  },
  {
    "id": "5",
    "firstName": "Tom",
    "lastName": "Glover",
    "level": 3,
    "whoIsWho": "coach",
    "profilePic": "https://images.unsplash.com/photo-1530645298377-82c8416d3f90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
  }
];

class UsersList extends Component {
  constructor (props) {
    super(props);
    this.state ={
      coaches: data
    }
  }
}

this.state.coaches.map(function(el) {
  return <li
    key={el.id}
    name={el.firstName}
    surname={el.lastName}
    image={el.profilePic}
    level={el.level}
  />;
})

export default UsersList;