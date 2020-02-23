import React, {Component} from 'react';
import ReactDOM from "react-dom";

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

  render() {
    return (

      <div className={container}>
        <ul>
          {this.state.data.map(el => (
            <li>
              {el.firstName}: {el.lastName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;