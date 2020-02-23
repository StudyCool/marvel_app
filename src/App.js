import React, {Component} from 'react';
import ReactDOM from "react-dom";
import UserCard from './components/UserCard';
import Choice from './components/ChoiceCheckbox';
import {REST_API_BASE_URL} from './constants';

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
        <span> To: </span>
        <ul style={{margin: "0px, auto"}}>
          {this.state.data.map(coach => (
            <li style={{ width: "375px", height: "72px", borderBottom: "#E6EAEE"}}>
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