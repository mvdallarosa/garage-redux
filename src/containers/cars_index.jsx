import React, { Component } from 'react';
import { connect } from 'react-redux';
import Car from '../components/car.jsx'
import { bindActionCreators } from 'redux';
import { fetchCars } from '../actions';
import { Link } from 'react-router-dom';

class CarsIndex extends Component {

  componentWillMount() {
    this.props.fetchCars(this.props.garage)
  }

  render() {
    return (
      <div className="car-list" ref={(list) => { this.list = list; }}>
        {this.props.cars === null ? "" : this.props.cars.map(car => <Car car={car} key={car.id} />) }
      <Link to={`/cars/new`}>
        <div className="btn btn-gradient">Add new car</div>
      </Link>
      </div>
    );
  }
  componentDidMount() {
    this.props.fetchCars(this.props.garage)
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchCars: fetchCars },
    dispatch );
}

function mapStateToProps(state) {
  return {
    garage: state.garage,
    cars: state.cars
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
