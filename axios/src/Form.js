import React, { Component } from 'react';
import "./.css";


class Form extends React.Component {
  render() {
    return (
      <div id="Form">
       <h1 style={{color: 'blue',marginLeft:300,marginTop:150} }> Add Staff </h1>
        <form id ="Form" onSubmit={this.props.handleFormSubmit}>
          <label htmlFor="username">
          Enter Staff Name : <br/>
          <input id="username" value={this.props.newUsername} 
            type="text" name="username"
            onChange={this.props.handleInputChange} />
          </label><br/>
          <label for="password">
          Enter Mobile No.
          <br/> <input id="password" value={this.props.newPassword} 
            type="password" name="password"
            onChange={this.props.handleInputChange} />
          </label><br/>
          <button type="submit" value="Submit">Log IN</button>
        </form>
      </div>
    );
  }
}

export default Form;