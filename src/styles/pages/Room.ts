import styled, { css } from 'styled-components'

type LikeButtonProps = {
  liked: string | undefined
}

export const PageRoom = styled.div`
  header {
    padding: 1.5rem;
    border-bottom: 1px solid ${props => props.theme.grayLight};

    & > div {
      max-width: 1120px;
      margin: 0 auto;

      display: flex;
      justify-content: space-between;
      align-items: center;

      & > img {
        max-height: 3rem;
      }

      & > div {
        display: flex;
        align-items: center;
        gap: 1rem;

        button {
          height: 2.5rem;
        }
      }
    }
  }
`
export const Content = styled.main`
  max-width: 832px;
  margin: 0 auto;

  padding: 0 1.5rem;

  form {
    textarea {
      width: 100%;
      border: 0;
      padding: 1rem;
      border-radius: 0.5rem;
      background: #fefefe;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
      resize: vertical;
      min-height: 130px;
      max-height: 400px;
    }
  }
`
export const RoomTitle = styled.div`
  margin: 2rem 0 1.5rem;

  display: flex;
  align-items: center;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    color: ${props => props.theme.text};
  }

  span {
    margin-left: 1rem;
    background: ${props => props.theme.pinkDark};
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    font-weight: 500;
  }
`
export const FormFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;

  & > span {
    font-size: 0.875rem;

    color: ${props => props.theme.grayDark};
    font-weight: 500;

    button {
      background: none;
      border: none;

      font-size: 0.875rem;
      font-weight: 500;

      color: ${props => props.theme.purple};
      text-decoration: underline;
      margin-left: 5px;

      cursor: pointer;

      &:hover {
        filter: brightness(0.9);
      }
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
    color: ${props => props.theme.text};
    font-weight: 500;
    font-size: 0.875rem;
  }
`

export const QuestionList = styled.section`
  margin-top: 2rem;
`

export const LikeButton = styled.button<LikeButtonProps>`
  display: flex;
  align-items: flex-end;
  color: ${props => props.theme.grayDark};
  gap: 8px;

  transition: filter 0.2s;

  ${props =>
    props.liked &&
    css`
      color: ${props => props.theme.purple};

      svg path {
        stroke: ${props => props.theme.purple};
      }
    `}

  &:hover {
    filter: brightness(0.5);
  }
`
