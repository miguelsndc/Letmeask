import styled from 'styled-components'

export const RoomCode = styled.button`
  height: 2.5rem;
  border-radius: 8px;
  overflow: hidden;

  background: #fff;
  border: 1px solid ${props => props.theme.purple};
  cursor: pointer;

  display: flex;
  align-items: stretch;

  & > div {
    background: ${props => props.theme.purple};
    padding: 0 0.75rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
    display: block;
    align-self: center;
    flex: 1;

    padding: 0 1rem 0 0.75rem;

    font-size: 0.875rem;
    font-weight: 500;
  }
`
