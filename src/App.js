import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { Link } from 'react-router'



import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to my Portfilio!</h2>
        <NavbarInstance />

        </div>
        <div className="content">
            {this.props.children}
        </div>
      </div>
    );
  }
}


const NavbarInstance =  React.createClass({
  render: function() {
   return (
  <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Home</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <Link to="/stuff">Stuff</Link>
        <Link to="/contact">Contact</Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
}
});

var Home = React.createClass({
  render: function() {
      return (
        <div>
          <h2>HELLO</h2>
          <p>Cras facilisis urna ornare ex volutpat, et
          convallis erat elementum. Ut aliquam, ipsum vitae
          gravida suscipit, metus dui bibendum est, eget rhoncus nibh
          metus nec massa. Maecenas hendrerit laoreet augue
          nec molestie. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.</p>

          <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
        </div>
      );
    }
});

var Contact = React.createClass({
  render: function() {
      return (
        <div>
          <h2>GOT QUESTIONS?</h2>
          <p>The easiest thing to do is post on
          our <a href="http://forum.kirupa.com">forums</a>.
          </p>
        </div>
      );
    }
});

var Stuff = React.createClass({
  render: function() {
      return (
        <div>
          <h2>STUFF</h2>
          <p>Mauris sem velit, vehicula eget sodales vitae,
          rhoncus eget sapien:</p>
          <ol>
            <li>Nulla pulvinar diam</li>
            <li>Facilisis bibendum</li>
            <li>Vestibulum vulputate</li>
            <li>Eget erat</li>
            <li>Id porttitor</li>
          </ol>
        </div>
      );
    }
});

export default App;
