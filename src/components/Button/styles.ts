import styled from 'styled-components'

export const Button = styled.button`
  height: 3.125rem;
  border-radius: 8px;
  font-weight: 500;

  background: ${props => props.theme.purple};
  color: ${props => props.theme.white};
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  border: none;

  img {
    margin-right: 8px;
  }

  transition: filter 0.2s;

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
