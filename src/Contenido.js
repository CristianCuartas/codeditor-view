import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contenido extends Component {
  static propTypes = {
    body: PropTypes.object.isRequired
  };

  render() {
    const { body } = this.props;
    return <div className="Contenido">{body}</div>;
  }
}
export default Contenido;
