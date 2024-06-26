import React from 'react'
import { CardLayout } from '../../globalStyle'
import Title from '../utils/Title'

const FeaturedTours = props => {
  return (
    <div className='body-container extra-margin'>
      <Title title='Популярные направления' />
      <CardLayout home>
        {props.featuredTours()}
      </CardLayout>
    </div >
  )
}

export default FeaturedTours
