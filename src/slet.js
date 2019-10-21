import React from 'react';
import PropTypes from 'prop-types'

 
const PersonPresenter = (props) => {
  return (<div>
    <p>{props.firstName}, {props.lastName}, {props.age}</p>
  </div>  );
}

PersonPresenter.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  age: PropTypes.number
}
 
export default PersonPresenter;