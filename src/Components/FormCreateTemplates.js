import React, { Component } from 'react';
import ShowTemplate from './ShowTemplate';
import CodeMirror from 'codemirror';
class FormCreateTemplates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      css: '',
      html: '',
      showTemplate: '',
      modalPreviewTemplate: false
    };
  }

  renderHTML(value) {
    const html = value || document.getElementById('txthtml').value;
    console.log(value);
    this.setState({
      html
    });
  }

  renderCSS(value) {
    const css = value || document.getElementById('txtcss').value;
    console.log(value);
    this.setState({
      css
    });
  }

  processTemplate = (renderHTML, renderCSS) => {
    renderHTML = this.state.html;

    renderCSS = this.state.css;

    let template = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Document</title>
          <style>${renderCSS}</style>
      </head>
      <body>
      </body>
      </html>`;

    setTimeout(() => {
      this.Template((template += renderHTML));
    }, 2000);

    return template;
  };

  Template(value) {
    this.setState({
      showTemplate: value
    });
  }

  vistaPrevia() {
    window.open('#preview', 'preview', 'width=700, height=505');
  }

  openModalEdit() {
    this.refs.child.toggle();
  }
  // componentDidMount() {
  //   this.editor();
  // }

  editor = () => {
    CodeMirror.fromTextArea(document.getElementById('txthtml'), {
      mode: 'HTML',
      lineNumbers: true
    });

    CodeMirror.fromTextArea(document.getElementById('txtcss'), {
      mode: 'css',
      lineNumbers: true
    });
  };

  render() {
    return (
      <div>
        <form>
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6"></div>
          </div>
          <textarea
            rows={'15'}
            cols={'80'}
            id="txthtml"
            onKeyUp={e => this.renderHTML(e.target.value)}
          >
            {this.processTemplate()}
          </textarea>
          <textarea
            rows={'15'}
            cols={'80'}
            id="txtcss"
            onKeyUp={e => this.renderCSS(e.target.value)}
          ></textarea>
          <br />
        </form>
        <button
          className="btn btn-secondary btn-sm"
          data-trigger="hover"
          onClick={() => {
            this.openModalEdit();
          }}
        >
          Vista previa
        </button>
        <ShowTemplate
          ref="child"
          template={this.state.showTemplate}
          modal={this.state.modalPreviewTemplate}
        />
      </div>
    );
  }
}
export default FormCreateTemplates;
