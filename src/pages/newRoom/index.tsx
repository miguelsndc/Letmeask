import { useForm } from 'react-hook-form'

import { Link, useHistory } from 'react-router-dom'
import IllustrationImg from '../../assets/images/illustration.svg'
import LogoImg from '../../assets/images/logo.svg'

import { ErrorMsg } from '../../styles/pages/shared'

import { Button } from '../../components/Button/'

import * as S from '../../styles/pages/shared'
import { database } from '../../services/firebase'
import { useAuth } from '../../hooks/useAuth'

type FormData = {
  newRoom: string
}

export function NewRoom() {
  const { user } = useAuth()
  const history = useHistory()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  async function handleCreateRoom(data: FormData) {
    const { newRoom } = data

    const roomRef = database.ref('rooms')

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    })

    history.push(`/rooms/${firebaseRoom.key}`)
  }

  return (
    <S.PageAuth>
      <aside>
        <img
          src={IllustrationImg}
          alt='Ilustração simbolizando perguntas e respostas'
        />
        <strong>Toda pergunta tem uma resposta.</strong>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </aside>
      <main>
        <S.MainContent>
          <img src={LogoImg} alt='Letmeask' />
          <h2>Criar uma nova Sala</h2>
          <form onSubmit={handleSubmit(handleCreateRoom)}>
            <input
              type='text'
              placeholder='Nome da Sala'
              {...register('newRoom', { required: true })}
            />
            {errors.newRoom && <S.ErrorMsg>Digite o nome da sala</S.ErrorMsg>}
            <Button type='submit'>Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala já existente?{' '}
            <Link to='/'>Clique aqui</Link>{' '}
          </p>
        </S.MainContent>
      </main>
    </S.PageAuth>
  )
}
