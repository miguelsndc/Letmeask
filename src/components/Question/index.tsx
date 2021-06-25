import { ReactNode } from 'react'
import * as S from './styles'

type QuestionProps = {
  children?: ReactNode
  content: string
  author: {
    name: string
    avatar: string
  }
  isAnswered: boolean
  isHighlighted: boolean
}

export function Question({
  children,
  author,
  content,
  isAnswered = false,
  isHighlighted = false,
}: QuestionProps) {
  return (
    <S.Question isAnswered={isAnswered} isHighlighted={isHighlighted}>
      <p>{content}</p>
      <footer>
        <S.UserInfo>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </S.UserInfo>
        <div>{children}</div>
      </footer>
    </S.Question>
  )
}
