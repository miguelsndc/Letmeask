import copyImg from '../../assets/images/copy.svg'

import toast from 'react-hot-toast'

import * as S from './styles'

type RoomCodeProps = {
  code: string
}

export function RoomCode({ code }: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(code)
    toast.success('Copiado com sucesso')
  }

  return (
    <S.RoomCode onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt='Copiar código da sala' />
      </div>
      <span>Sala #{code}</span>
    </S.RoomCode>
  )
}
