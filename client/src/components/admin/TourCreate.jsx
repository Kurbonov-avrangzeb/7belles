import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { Button, ProfilePageWrapper, TourFormWrapper, ButtonWrapper, ProfileBox, BackButton } from '../../globalStyle'
import { createTour } from '../../redux/actions/tourActions'
import { imageForm, tourForm } from '../../constants/formFields'
import ProfileSidebar from '../profile/ProfileSidebar'
import ProfileBody from '../profile/ProfileBody'
import FormInput from '../utils/FormInput'
import FormSelect from '../utils/FormSelect'
import FormFile from '../utils/FormFile'
import FormTextarea from '../utils/FormTextarea'
import styled from 'styled-components'


class TourCreate extends Component {

  // RENDER FORM INPUT/SELECT
  renderInput = props => <FormInput {...props} white />
  renderSelect = props => <FormSelect {...props} white />
  // FILE UPLOAD COMPONENT
  fileUpload = props => <FormFile {...props} white />
  renderTextarea = props => <FormTextarea {...props} white />

  // FORM SUBMIT HANDLER
  onSubmit = formValues => {
    if (formValues.startDate) {
      const time = new Date(formValues.startDate);
      const convertedDate = time.toISOString();
      formValues.startDate = convertedDate;
    }
    this.props.createTour(formValues);
  };

  // RENDER COMPONENT
  render() {
    return (
      <ProfilePageWrapper>
        <ProfileBox>
          <ProfileSidebar />
          <ProfileBody>
            <BackButton>
              <Link to='/admin/tours'><HiOutlineArrowNarrowLeft />Вернуться к списку туров</Link>
            </BackButton>
            <h2>Создание нового тура</h2>
            <TourFormWrapper>
              <small style={{ color: 'tomato' }}>Все поля обязательны для заполнения</small>
              <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <FormGrid>
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
                </FormGrid>
                <ButtonWrapper>
                  <Button type='submit' dark>Создать тур</Button>
                </ButtonWrapper>
              </form>
            </TourFormWrapper>
          </ProfileBody>
        </ProfileBox>
      </ProfilePageWrapper>
    )
  }
}
// FORM VALIDATE
const validate = ({ name, price, maxGroupSize, duration, summary, startDates, description, startLocation, imageCover, image1, image2, image3 }) => {
  const errors = {};

  if (!name) errors.name = 'Введите название тура';
  else if (name?.length < 10 ) errors.name = 'Название тура должно иметь минимум 10 символов!';
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

// STYLE
const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 2rem;

  @media (min-width:768px) {
    grid-template-columns: 1fr 1fr;
  }
`

// WRAP REDUX-FORM 
const tourReduxForm = reduxForm({
  form: 'tourForm',
  validate
})(TourCreate);

// WRAP REDUX
export default connect(
  null, { createTour }
)(tourReduxForm);