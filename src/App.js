import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Choice from './components/ChoiceCheckbox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch('http://localhost:3000/coaches.json')
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

      <div >
        <span> </span>
        <ul>
          {this.state.data.map(el => (
            <li>
              {el.firstName}: {el.lastName} , level: {el.level}

              <Choice/>

            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;