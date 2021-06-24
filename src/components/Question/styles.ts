import styled, { keyframes } from 'styled-components'

const Fade = keyframes`
  from {
    opacity: 0;
  }

  to {
    margin-left: 0;
  }
`

export const Question = styled.div`
  background: #fefefe;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 1.5rem;

  transition: all 0.3s;

  animation: ${Fade} 0.3s;
  & + & {
    margin-top: 0.75rem;
  }

  p {
    color: ${props => props.theme.text};
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 1.5rem;

    button {
      border: 0;
      background: transparent;
      cursor: pointer;
    }
  }
`
export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }

  span {
    margin-left: 0.55rem;
    color: ${props => props.theme.grayDark};
    font-size: 0.875rem;
  }
`
