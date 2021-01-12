import React, { Component } from 'react';
import { connect } from 'react-redux';
import Car from '../components/car.jsx'
import { bindActionCreators } from 'redux';
import { fetchCar } from '../actions';
import { Link } from 'react-router-dom';
import carsReducer from '../reducers/cars_reducer';


class CarsShow extends Component {

  componentWillMount() {
    console.log(this.props)
    // this.props.fetchCar(parseInt(this.props.match.params.id))
  }

  render() {
    // const car = this.props.fetchCar(parseInt(this.props.match.params.id)).first
    return (
      <div className="card-product">
        <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg" />
        <div className="card-product-infos">
          <h2>{this.props.car.brand} - {this.props.car.model}</h2>
          <p><strong>Owner:</strong> {this.props.car.owner}</p>
        </div>
      </div>
    );
  }
  componentDidMount() {
    // this.props.fetchCar(parseInt(this.props.match.params.id))
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchCar: fetchCar },
    dispatch );
}

function mapStateToProps(state, ownProps) {
  const id = parseInt(ownProps.match.params.id);
  return {
    car: state.cars.find((car) => car.id === id)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
