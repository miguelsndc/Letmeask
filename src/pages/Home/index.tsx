import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { Button } from '../../components/Button/'

import * as S from '../../styles/pages/shared'

import { useAuth } from '../../hooks/useAuth'

import IllustrationImg from '../../assets/images/illustration.svg'
import GoogleIconImg from '../../assets/images/google-icon.svg'
import LogoImg from '../../assets/images/logo.svg'
import EnterRoomIconImg from '../../assets/images/enter.svg'
import { database } from '../../services/firebase'
import { useState } from 'react'

type FormData = {
  roomCode: string
}

export function Home() {
  const history = useHistory()
  const [error, setError] = useState('')
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

  async function handleJoinRoom(data: FormData) {
    const { roomCode } = data

    const roomRef = await database.ref(`/rooms/${roomCode}`).get()

    if (!roomRef.exists()) {
      setError('Esta sala não existe')
      return
    }

    history.push(`/rooms/${roomCode}`)
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

          <S.CreateRoomBtn onClick={handleCreateRoom}>
            <img src={GoogleIconImg} alt='Logo do Google' />
            Crie sua sala com o google
          </S.CreateRoomBtn>

          <S.Separator>ou entre em uma sala</S.Separator>

          <form onSubmit={handleSubmit(handleJoinRoom)}>
            <input
              type='text'
              placeholder='Digite o código da sala'
              {...register('roomCode', { required: true })}
            />
            {error && <S.ErrorMsg>{error}.</S.ErrorMsg>}
            {errors.roomCode && (
              <S.ErrorMsg>Digite o código da sala.</S.ErrorMsg>
            )}
            <Button type='submit'>
              <img src={EnterRoomIconImg} alt='Entrar na sala' />
              Entrar na sala
            </Button>
          </form>
        </S.MainContent>
      </main>
    </S.PageAuth>
  )
}
