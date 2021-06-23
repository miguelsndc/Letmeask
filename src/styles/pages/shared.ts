import styled from 'styled-components'

export const PageAuth = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  aside {
    flex: 7;

    background: ${props => props.theme.purple};
    color: ${props => props.theme.white};

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 7.5rem 5rem;

    img {
      max-width: 20rem;
    }

    strong {
      font: 700 2.25rem 'Poppins', sans-serif;
      line-height: 42px;
      margin-top: 1rem;
    }

    p {
      font-size: 1.5rem;
      line-height: 2rem;
      margin-top: 1rem;
      opacity: 0.8;
      color: ${props => props.theme.textDarker};
    }
  }
  main {
    flex: 8;

    padding: 0 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 20rem;
  align-items: stretch;
  text-align: center;

  & > img {
    align-self: center;
  }

  h2 {
    font-size: 1.5rem;
    margin: 4rem 0 1.5rem;
    font-family: 'Poppins', sans-serif;
  }

  form {
    input {
      height: 3.125rem;
      border-radius: 8px;
      padding: 0 1rem;
      background: ${props => props.theme.white};
      border: 1px solid ${props => props.theme.grayMedium};
    }

    button {
      margin-top: 1rem;
    }

    button,
    input {
      width: 100%;
    }
  }

  p {
    font-size: 0.875rem;
    color: ${props => props.theme.grayDark};
    margin-top: 1rem;

    a {
      color: ${props => props.theme.pinkDark};
    }
  }
`

export const CreateRoomBtn = styled.button`
  margin-top: 4rem;
  height: 3.125rem;
  border-radius: 8px;
  font-weight: 500;

  background: ${props => props.theme.googleRed};
  color: ${props => props.theme.white};

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  border: none;

  img {
    margin-right: 8px;
  }

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`

export const Separator = styled.div`
  font-size: 0.875rem;
  color: ${props => props.theme.grayMedium};

  margin: 2rem 0;

  display: flex;
  align-items: center;

  &::before {
    content: '';
    flex: 1;
    height: 1px;
    background: ${props => props.theme.grayMedium};
    margin-right: 1rem;
  }
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${props => props.theme.grayMedium};
    margin-left: 1rem;
  }
`

export const ErrorMsg = styled.div`
  color: ${props => props.theme.danger};
  text-align: left;
  margin-top: 5px;
  font-weight: 500;
`
