import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="app center">
        <Link to={`/meri/cars`}>
          <div className="btn btn-gradient">Go to my garage</div>
        </Link>
      </div>
    );
  }
};

export default Home
