import React, { Component } from 'react';
import App from '../../App';
class Choice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }



  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
                    [name]: value
                  });
  }

  render () {
    return (
      <input
        name="isChecked"
        type="checkbox"
        checked={this.state.isChecked}
        onChange={this.handleInputChange} />
    );
  }

}

export default Choice;
