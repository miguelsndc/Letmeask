import styled, { css } from 'styled-components'

type ButtonProps = {
  variant?: string
}

export const Button = styled.button<ButtonProps>`
  height: 3.125rem;
  border-radius: 8px;
  font-weight: 500;

  background: ${props => props.theme.purple};
  color: ${props => props.theme.white};
  padding: 0 2rem;

  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.2s;
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
