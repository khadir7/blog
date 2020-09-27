import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"

const Background = styled.div`
  height: 100vh;
  background: #ddeefc;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Form = styled.div`
  background: #fff;
  box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);
  border-radius: 10px;
  padding: 35px;
  padding-top: 150px;
  width: 50%;
  max-width: 500px;
  position: relative;
`

const CardFocus = styled.div`
  position: absolute;
  z-index: 3;
  border-radius: 5px;
  left: ${props => (props.left ? `${props.left}` : `0`)};
  top: ${props => (props.top ? `${props.top}` : `0`)};
  width: ${props => (props.width ? `${props.width}` : `100%`)};
  height: ${props => (props.height ? `${props.height}` : `100%`)};
  opacity: ${props => (props.opacity ? `${props.opacity}` : `0`)};
  transition: all 0.35s cubic-bezier(0.71, 0.03, 0.56, 0.85);
  pointer-events: none;
  border: 2px solid rgba(255, 255, 255, 0.65);
`

const Card = styled.div`
  position: relative;
  border-radius: inherit;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 15px;
  height: 100%;
  width: 100%;
  background: url("https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/22.jpeg");
  background-size: contain;
`

const CardContent = styled.label`
  height: 60px;
  /* border: 1px solid white; */
`
// https://miro.medium.com/max/945/1*pwVhnOs4CohLUcmu3I4Z6A.gif
const CardContainer = styled.div`
  position: absolute;
  height: 210px;
  width: 70%;
  top: -100px;
  border-radius: 15px;
  left: 50%;
  box-shadow: 0 20px 60px 0 rgba(14, 42, 90, 0.55);
  transform: translateX(-50%);
`

const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  box-shadow: none;
  border: 1px solid #ced6e0;
  transition: all 0.3s ease-in-out;
  font-size: 18px;
  padding: 5px 15px;
  background: none;
  color: #1a3b5d;
  font-family: "Source Sans Pro", sans-serif;
`

const InputContainer = styled.div`
  margin-bottom: 20px;
`

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
  font-weight: 500;
  color: #1a3b5d;
  width: 100%;
  display: block;
  user-select: none;
`

const CreditCard = props => {
  const [focusStyle, setFocusStyle] = useState({})
  const inputEl = useRef()
  const inputBox = useRef()
  const updateFocusStyle = ({
    offsetTop,
    offsetLeft,
    offsetWidth,
    offsetHeight,
    opacity = 1,
  }) => {
    setFocusStyle({
      top: `${offsetTop}px`,
      left: `${offsetLeft}px`,
      height: `${offsetHeight}px`,
      width: `${offsetWidth}px`,
      opacity,
    })
  }
  const onInputClick = () =>
    setFocusStyle({
      top: `${inputBox.current.offsetTop}px`,
      left: `${inputBox.current.offsetLeft}px`,
      height: `${inputBox.current.offsetHeight}px`,
      width: `${inputBox.current.offsetWidth}px`,
      opacity: 1,
    })
  return (
    <Background>
      <Form>
        <CardContainer>
          <Card>
            <CardContent />
            <CardContent
              htmlFor="cardNumber"
              ref={inputBox}
              onClick={event => updateFocusStyle(event.target)}
            />
            <CardContent />
            <CardFocus {...focusStyle} />
          </Card>
        </CardContainer>
        <InputBox
          label="Card Number"
          id="cardNumber"
          inputRef={inputEl}
          onInputClick={onInputClick}
          onInputBlur={() => setFocusStyle({})}
        />
        <InputBox label="Card Holders" />
      </Form>
    </Background>
  )
}

function InputBox({ label, inputRef, onInputClick, onInputBlur, id }) {
  return (
    <InputContainer>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        ref={inputRef}
        onClick={onInputClick}
        onBlur={onInputBlur}
      />
    </InputContainer>
  )
}

export default CreditCard
