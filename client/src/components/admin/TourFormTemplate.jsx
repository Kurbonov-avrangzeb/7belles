import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { tourForm } from '../../constants/formFields'
import { createTour } from '../../redux/actions/tourActions'
import { ButtonWrapper, TourFormWrapper } from '../../globalStyle'
import FormInput from '../utils/FormInput'
import styled from 'styled-components'
import FormSelect from '../utils/FormSelect'
import FormFile from '../utils/FormFile'


class TourFormTemplate extends Component {

  // RENDER FORM INPUT/SELECT
  renderInput = props => <FormInput {...props} white />
  renderSelect = props => <FormSelect {...props} white />

  // FILE UPLOAD COMPONENT
  fileUpload = props => <FormFile {...props} white />

  // RENDER COMPONENT
  render() {
    return (
      <TourFormWrapper>
        <small style={{ color: 'tomato' }}>* Все поля обязательны для заполнения</small>
        <Form onSubmit={this.props.handleSubmit(this.props.minonSubmit)}>
          {tourForm.map(tour => {
            return (
              <Field
                key={tour.label}
                name={tour.name}
                label={tour.label}
                type={tour.type}
                min={tour.min}
                values={tour.values}
                component={tour.type === 'select' ? this.renderSelect : this.renderInput}
              />
            )
          })}
          {/* IMAGES */}
          <div>
            <Field
              name='imageCover'
              type='file'
              label='Обложка'
              component={this.fileUpload}
              accept='image/*'
            />
            <Field
              name='image1'
              type='file'
              label='1 изображение'
              component={this.fileUpload}
              accept='image/*'
            />
            <Field
              name='image2'
              type='file'
              label='2 изображение'
              component={this.fileUpload}
              accept='image/*'
            />
            <Field
              name='image3'
              type='file'
              label='3 изображение'
              component={this.fileUpload}
              accept='image/*'
            />
          </div>
          <ButtonWrapper>
            {this.props.actions}
          </ButtonWrapper>
        </Form>
      </TourFormWrapper>
    )
  }
}

// STYLE
const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2rem;
`

// FORM VALIDATE
const validate = ({ name, price, maxGroupSize, duration, summary }) => {
  const errors = {};

  if (!name) errors.name = 'Введите название тура';
  if (!price) errors.price = 'Введите цену';
  if (!maxGroupSize) errors.maxGroupSize = 'Введите количество участников';
  if (!duration) errors.duration = 'Введите продолжительность';
  if (!summary) errors.summary = 'Введите краткое описание';

  return errors;
}

// WRAP REDUX-FORM 
const tourReduxForm = reduxForm({
  form: 'tourForm',
  validate
})(TourFormTemplate);

// WRAP REDUX
export default connect(
  null, { createTour }
)(tourReduxForm);
