import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { imageForm, tourForm } from '../../constants/formFields'
import { fetchTour, updateTour } from '../../redux/actions/tourActions'
import { ButtonWrapper, Button, TourFormWrapper, ProfilePageWrapper, ProfileBox, BackButton } from '../../globalStyle'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import ProfileSidebar from '../profile/ProfileSidebar'
import ProfileBody from '../profile/ProfileBody'
import styled from 'styled-components'
import FormInput from '../utils/FormInput'
import FormSelect from '../utils/FormSelect'
import FormTextarea from '../utils/FormTextarea'
import FormFile from '../utils/FormFile'

class TourEdit extends Component {
  componentDidMount() {
    this.props.fetchTour(this.props.match.params.id)
  }

  // RENDER FormInput.jsx
  renderInput = props => <FormInput {...props} white />
  renderSelect = props => <FormSelect {...props} white />
  renderTextarea = props => <FormTextarea {...props} white />
  // FILE UPLOAD COMPONENT
  fileUpload = props => <FormFile {...props} white />

  // FORM SUBMIT HANDLER
  onSubmit = formValues => {
    if (formValues.startDate) {
      const time = new Date(formValues.startDate);
      const convertedDate = time.toISOString();
      formValues.startDate = convertedDate;
    }
    this.props.updateTour(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.tour) {
      return <div>Loading...</div>
    }

    return (
      <ProfilePageWrapper>
        <ProfileBox>
          <ProfileSidebar />
          <ProfileBody>
            <BackButton>
              <Link to='/admin/tours'><HiOutlineArrowNarrowLeft />Вернуться к списку туров</Link>
            </BackButton>
            <h2>Редактирование</h2>
            <TourFormWrapper>
              <small style={{ color: 'tomato' }}>Все поля обязательны для заполнения</small>
              <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
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
                {imageForm.map(image => (
                  <Field
                    key={image.id}
                    name={image.name}
                    label={image.label}
                    type={image.type}
                    component={this.fileUpload}
                    accept='image/*'
                  />
                ))}
                <Field
                  name='description'
                  label='Описание'
                  component={this.renderTextarea}
                  placeholder='Введите информацию о туре'
                />
                <ButtonWrapper>
                  <Button type='submit' dark>Обновить</Button>
                </ButtonWrapper>
              </Form>
            </TourFormWrapper>
          </ProfileBody>
        </ProfileBox>
      </ProfilePageWrapper>
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
const validate = ({ name, price, maxGroupSize, duration, summary, startDates, description, startLocation, imageCover, image1, image2, image3 }) => {
  const errors = {};

  if (!name) errors.name = 'Введите название тура';
  if (!price) errors.price = 'Введите цену';
  if (!maxGroupSize) errors.maxGroupSize = 'Введите количество участников';
  if (!duration) errors.duration = 'Введите продолжительность';
  if (!summary) errors.summary = 'Введите краткое описание';
  if (!startDates) errors.startDates = 'Введите дату начала';
  if (!description) errors.description = 'Введите описание тура';
  if (!startLocation) errors.startLocation = 'Укажите локацию тура';
  if (!imageCover) errors.imageCover = 'Загрузите обложку для карточки тура';
  if (!image1) errors.image1 = 'Загрузите 1 изображение';
  if (!image2) errors.image2 = 'Загрузите 2 изображение';
  if (!image3) errors.image3 = 'Загрузите 3 изображение';

  return errors;
}

const tourReduxForm = reduxForm({
  form: 'tourForm',
  validate
})(TourEdit);

const mapStateToProps = (state, ownProps) => {
  let initialValues = state.tours[ownProps.match.params.id];

  return {
    tour: state.tours[ownProps.match.params.id],
    initialValues: initialValues
  }
}

export default connect(
  mapStateToProps, { updateTour, fetchTour }
)(tourReduxForm);
