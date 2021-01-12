import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createCar } from '../actions';


class CarsNew extends Component {
  onSubmit = (values) => {
    console.log(values)
    this.props.createCar(values, (car) => {
      this.props.history.push('/meri/cars'); // Navigate after submit
        return car;
    });
  }
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}
        />
      </div>
    );
  }
  render() {
    return (
      <form className="app" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          label="Brand"
          name="brand"
          type="text"
          component={this.renderField}
        />
        <Field
          label="Model"
          name="model"
          type="text"
          component={this.renderField}
        />
        <Field
          label="Owner"
          name="owner"
          type="text"
          component={this.renderField}
        />
        <Field
          label="Plate"
          name="plate"
          type="text"
          component={this.renderField}
        />
        <button className="btn btn-primary" type="submit"
        disabled={this.props.pristine || this.props.submitting}>
          Create Car
        </button>
      </form>
    );
  }
}

export default reduxForm({ form: 'newCarForm' })(
  connect(null, { createCar })(CarsNew)
);

