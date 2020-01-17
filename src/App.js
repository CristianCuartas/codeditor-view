import React, { Component } from 'react';
import FormCreateTemplates from './Components/FormCreateTemplates';

class EditCodeView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  a = () => {
    return <h1>Hola</h1>;
  };
  render() {
    return (
      <div>
        {this.a()}
        <FormCreateTemplates />
      </div>
    );
  }
}

export default EditCodeView;
