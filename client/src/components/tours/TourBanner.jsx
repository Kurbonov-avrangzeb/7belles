import React from 'react'
import { connect } from 'react-redux';
import { processPayment } from '../../redux/actions/checkoutAction';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import styled from 'styled-components';
import history from '../../history';

const stripePromise = loadStripe('pk_test_51PIwPFGBb5DoC0tyOv14Sd2OI5CxWa1LIDZslelM99f1p4hamGeOsnfaJtTNejqXmgb5nZKZjt7zfheeN5qCUwfJ00loq3tonm');

const TourBanner = ({ id, duration, processPayment, isSignedIn }) => {

  const handlePayment = async () => {
    if (!isSignedIn) {
      history.push('/login')
    } else {
      processPayment(id, stripePromise);
    }
  }

  return (
    <Elements stripe={stripePromise}>
      <BannerWrapper>
        <BannerText>
          <h2>Чего вы ждёте? </h2>
          <p>{duration}  1 Приключение. Бесконечные воспоминания. Сделайте его своим сегодня!</p>
        </BannerText>

        <BannerButton onClick={handlePayment}>
          {!isSignedIn
            ? <button>Войдите, чтобы Забронировать тур</button>
            : <button>Забронировать тур</button>
          }
        </BannerButton>
      </BannerWrapper>
    </Elements>
  )
}

const BannerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem;
  background: var(--accent-clr);
  border-radius: 1rem;
  width: 80%;
  margin: 0 auto 5rem;

  @media (max-width: 996px) {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }

  @media (max-width: 768px){
    width: 100%;
  }
`

const BannerText = styled.div`
  color: white;

  h2 {
    font-size: 2.5rem;

    @media (max-width: 1100px) {
      font-size: 2rem;
  }
  }
`

const BannerButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  button {
    text-transform: uppercase;
    padding: 1rem 2rem;
    border-radius: 2rem;
    background-color: #fff;
    border: none;
    cursor: pointer;
  }

  @media (max-width: 996px) {
    justify-content: center;
    margin-top: 2rem;
  }
`

export default connect(null, { processPayment })(TourBanner)