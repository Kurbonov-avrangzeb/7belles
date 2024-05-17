import React from 'react'
import styled from 'styled-components'

const Subscribe = () => {
  return (
    <SubscribeWrapper className='extra-margin'>
    <SubscribeContent>
      <SubscribeBody>
        <h2>Оставайтесь на связи</h2>
        <p>Будьте в курсе всех новостей и акций! Подпишитесь на нашу рассылку, чтобы первыми узнавать о специальных предложениях, скидках и интересных мероприятиях. Не упустите возможность быть в центре событий и продолжайте следить за нами!</p>
      </SubscribeBody>
      <SubscribeInput>
        <form>
          <input
            placeholder='email'
            type='email'
          />
          <button>Подписаться</button>
        </form>
      </SubscribeInput>
    </SubscribeContent>
  </SubscribeWrapper>
  )
}

const SubscribeWrapper = styled.section`
  background-color: var(--accent-light);
  padding: 2rem 1rem;

  @media (min-width: 996px) {
    padding: 5rem;
  }
`

const SubscribeContent = styled.div`
  max-width: 1170px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  align-items: center;


  h2 {
    font-size: 1.7rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    grid-gap: 3rem;
    padding: 0 1rem;
  }

  @media (min-width: 996px) {
    h2 {
      font-size: 2.5rem;
    }
  }
`

const SubscribeBody = styled.div`
  margin-bottom: 3rem;
`

const SubscribeInput = styled.div`
  display: flex;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  input {
    padding: 1rem;
    border: none;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
  }

  button {
    padding: 1rem;
    border: none;
    border-radius: 0.5rem;
    background-color: var(--accent-dark);
    color: #fff;
  }

  @media (min-width: 768px) {
    input {
      margin-bottom: 0;
      width: 15rem;
    }

    form {
      flex-direction: row;
      width: auto;
    }

    input {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }

    button {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }
  }
`

export default Subscribe