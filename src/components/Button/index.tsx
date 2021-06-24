import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'danger' | 'outlined' | 'secondary'
}

export function Button({ variant, ...rest }: ButtonProps) {
  return <S.Button variant={variant} {...rest} />
}
