import React, {Component} from 'react';
import propTypes from 'prop-types';



class Avatar extends Component {
  render() {
    return <img {...this.props}/>;
  }
}

Avatar.propTypes = {
  src:propTypes.string.isRequired,
  className: propTypes.string,
};

Avatar.defaultProps = {
  className: '',
  alt: 'avatar',
  src: 'https://www.facebook.com/ProfilePictures/photos/pb.129129487743.-2207520000../10154888128487744/?type=3&eid=ARDqVLo3W6LW--IglcgWoxoi4pl4DQ-iKOPAmrKGlV6Tu5Jp-eHxHa8_7uzge7DtRyTve2OO4WU2IJbO'

};

export default Avatar;