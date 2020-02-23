import React, {Component} from 'react';
import styles from './UsersList.styles.module.css';
import Spinner from '../Spinner';
import UserCard from '../UserCard';

class UsersList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      users: [],
      error: null,
    };
  }

  componentDidMount() {
    this.setState({
          isFetching: true,
        }
    );
    setTimeout(() => {
      fetch('/coaches.json').then(response => response.json()).then(users => {
        //console.log(users);
        this.setState({
          users,
          isFetching: false,
        });
      }).catch(err => {
        this.setState({
          error: err,
          isFetching: false,
        });
      });
    }, 2000);

  }

  renderUsers = () => {
    const {users} = this.state;

    return users.map(user => (

        <li key={user.id}>
          <UserCard user={user}/>
        </li>
    ));
  };
  renderSpinner = () => {
    const {isFetching} = this.state;
    if (isFetching) {
      return <Spinner/>;
    }
  };

  render() {

    return (
        <ol className={styles.container}>
          {
            this.renderUsers()
          }
          {
            this.renderSpinner()
          }
        </ol>
    );
  }

}

export default UsersList;
