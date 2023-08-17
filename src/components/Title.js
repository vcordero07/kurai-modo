import React from 'react'
import styled from 'styled-components'

const Title = ({ title }) => {
  return (
    <Wrapper>
      <h2 aria-label='section title'>
        <span># </span> {title}
      </h2>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  text-align: center;
  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    color: var(--clr-font);

    span {
      font-size: 1em;
      color: var(--clr-primary);
      font-weight: 700;
      margin-right: 1rem;
    }
  }
`
export default Title
