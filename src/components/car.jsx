import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Car extends Component {
  render() {
    return (
      <Link to={`/cars/${this.props.car.id}`} key={this.props.car.id}>
        <div className="card-product">
          <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg" />
          <div className="card-product-infos">
            <h2>{this.props.car.brand} - {this.props.car.brand}</h2>
            <p><strong>Owner:</strong> {this.props.car.owner}</p>
          </div>
        </div>
      </Link>
    );
  }
};

export default Car
