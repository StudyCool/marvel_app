import React, {Component} from 'react';
import ReactDOM from "react-dom";
import UserCard from './components/UserCard';
import Choice from './components/ChoiceCheckbox';
import {REST_API_BASE_URL} from './constants';
import styles from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch('/coaches.json')
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }

 /* handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
                    [name]: value
                  });
  }*/

  render() {
    return (

      <>

        <ul>
          <h3>New message</h3>
          <span> To: </span>
          {this.state.data.map(coach => (
            <li>
             <UserCard key={coach.id} coach={coach}/>
              <Choice/>

            </li>
          ))}
        </ul>

      </>
    );
  }
}

export default App;