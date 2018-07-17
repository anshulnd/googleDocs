/**
 * @file Sets up a collaborative rich-text editing desktop application with Electron.
 * @author Raj Kane
 * @author Jon Lee
 * @author Henry Gaskin
 * @author Anshul Nanda
 */

import React from 'react';
import Document from './document.js';

export default class App extends React.Component {
  /*
   * @class Represents the desktop application.
   */
  constructor(props) {
    super(props);
    this.state = {currentPage: "Document"};
    this.redirect = this.redirect.bind(this);
  };

  redirect(page) {
    /* Redirect the application to a specified page.
     * @param page - A page to which the application is to redirect.
     */
    this.setState({currentPage: page})
  }

  render() {
    return (
      <div>
        {this.state.currentPage === "Document" ? <Document /> : null}
      </div>
    );
  }
}