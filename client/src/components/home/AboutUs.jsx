import React from 'react'
import styled from 'styled-components'
import Title from '../utils/Title'

const AboutUs = () => {
  return (
    <AboutUsWrapper className='body-container extra-margin'>
      <div className='about-text'>
        <Title title='О нас' />
        <h3>Добро пожаловать на сайт нашего турагентства! Мы — команда энтузиастов, объединённых страстью к путешествиям.</h3>
        <p>Мы гордимся своим опытом и профессионализмом. Наша команда состоит из квалифицированных специалистов, которые не только хорошо знают географию и туристические направления, но и обладают богатым опытом путешествий. Благодаря этому мы можем гарантировать вам высокое качество обслуживания и индивидуальный подход к каждому клиенту.</p>
        <p>Подробнее <span>&#8594;</span></p>
      </div>
      <div className='about-image'>
        <img src='/tours/tour-1-4.jpg' alt='background-1' />
      </div>
    </AboutUsWrapper>
  )
}

const AboutUsWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px,1fr));
  grid-gap: 2rem;

  .about-text h3 {
    margin: 2rem 0;
    font-weight: 500;
  }

  .about-text p:last-child{
    margin: 1rem 0;
    font-weight: 500;
    color: var(--accent-clr);
    cursor: pointer;
  }

  @media (min-width: 768px) {
    grid-gap: 5rem;

    .about-text {
      padding-right: 3rem;
    }
  }
`

export default AboutUs
