import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { Button } from '../../components/Button/'

import {
  PageAuth,
  MainContent,
  Separator,
  CreateRoomBtn,
  ErrorMsg,
} from '../../styles/pages/shared'

import { useAuth } from '../../hooks/useAuth'

import IllustrationImg from '../../assets/images/illustration.svg'
import GoogleIconImg from '../../assets/images/google-icon.svg'
import LogoImg from '../../assets/images/logo.svg'
import EnterRoomIconImg from '../../assets/images/enter.svg'
type FormData = {
  roomCode: string
}

export function Home() {
  const history = useHistory()
  const { signInWithGoogle, user } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle()
    }

    history.push('/rooms/new')
  }

  return (
    <PageAuth>
      <aside>
        <img
          src={IllustrationImg}
          alt='Ilustração simbolizando perguntas e respostas'
        />
        <strong>Toda pergunta tem uma resposta.</strong>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </aside>

      <main>
        <MainContent>
          <img src={LogoImg} alt='Letmeask' />

          <CreateRoomBtn onClick={handleCreateRoom}>
            <img src={GoogleIconImg} alt='Logo do Google' />
            Crie sua sala com o google
          </CreateRoomBtn>

          <Separator>ou entre em uma sala</Separator>

          <form onSubmit={handleSubmit(handleJoinRoom)}>
            <input
              type='text'
              placeholder='Digite o código da sala'
              {...register('roomCode', { required: true })}
            />
            {error && <ErrorMsg>{error}.</ErrorMsg>}
            {errors.roomCode && <ErrorMsg>Digite o código da sala.</ErrorMsg>}
            <Button type='submit'>
              <img src={EnterRoomIconImg} alt='Entrar na sala' />
              Entrar na sala
            </Button>
          </form>
        </MainContent>
      </main>
    </PageAuth>
  )
}
