import React from 'react'
import styled from 'styled-components'
import StyledCard from './styledCard';
import { useState } from 'react';
import { ReactComponent as Star } from "../img/icon-star.svg";
import { ReactComponent as Illustration } from "../img/illustration-thank-you.svg";


function Card() {
  const [rate , setRate] = useState(0)
  const [submitted , setSubmitted] = useState(false)

  const handleClick = (event) => {
       const value = event.target.innerText
       setRate(value)
  }
      
  return (
    <StyledCard>

      <RatingCard className={submitted && 'hide'} rate={rate}>
        <div className="container">
          <div className='image'>
            <Star className='img'/>
          </div>
          <h1>How did we do?</h1>
          <p>Please let us Know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
          <div className='rates'>
            <span onClick={handleClick}>1</span>
            <span onClick={handleClick}>2</span>
            <span onClick={handleClick}>3</span>
            <span onClick={handleClick}>4</span>
            <span onClick={handleClick}>5</span>
          </div>

          <a onClick={() =>{setSubmitted(true)}} className='btn'>Submit</a>
        </div>
      </RatingCard>

      <SubmittedCard className={!submitted && 'hide'}>
        <div className='container'>
            <div className='image'>
                <Illustration className='img'/>
            </div>
            <span className='subSpan'>You selected {rate} out of 5 </span>
            <h1>Thank you!</h1>
            <p>
                We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
            </p>
        </div>
      </SubmittedCard>

    
    </StyledCard>
  )
}

export default Card


const RatingCard = styled.div`

  .image{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: hsl(213, 19%, 20%);
    margin-bottom: 20px;
    border-radius: 50%;
  }

  .rates{
     margin-bottom:30px;  

    span:nth-child(${props => props.rate}){
      background-color: hsl(25, 97%, 53%);
      color: hsl(0, 0%, 100%);
    }
  }  

`

const SubmittedCard = styled.div`
  text-align: center;
  padding: 40px 0;


  h1{
    font-size: 28px;
  }

  * & :not(:last-child){
    margin-bottom: 20px;
  }

  span{
    background-color: hsl(213, 19%, 18%);
    color: hsl(25, 97%, 53%);
    padding: 10px 20px;
    display: inline-block;
    text-align: center;
    border-radius: 40px ;
  }
`