import React, { Component } from 'react';
import ShowTemplate from './ShowTemplate';
class FormCreateTemplates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      css: '',
      html: '',
      showTemplate: ''
    };
  }

  renderHTML(value) {
    const html = value || document.getElementById('txthtml').value;
    // document.getElementById('divView').innerHTML = html;

    this.setState({
      html
    });
  }

  renderCSS(value) {
    const css = value || document.getElementById('txtcss').value;
    // document.getElementById('style').innerHTML = css;

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

  render() {
    return (
      <div>
        <form>
          <textarea
            id="txthtml"
            rows={'15'}
            cols={'80'}
            onKeyUp={e => this.renderHTML(e.target.value)}
          >
            {this.processTemplate()}
          </textarea>
          <textarea
            id="txtcss"
            rows={'15'}
            cols={'80'}
            onKeyUp={e => this.renderCSS(e.target.value)}
          ></textarea>
        </form>
        <ShowTemplate template={this.state.showTemplate} />
      </div>
    );
  }
}
export default FormCreateTemplates;
