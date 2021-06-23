import LogoImg from '../../assets/images/logo.svg'

import { useParams } from 'react-router-dom'

import { Button } from '../../components/Button'
import { RoomCode } from '../../components/RoomCode'

import {
  PageRoom,
  Content,
  RoomTitle,
  FormFooter,
  UserInfo,
} from '../../styles/pages/Room'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../hooks/useAuth'
import { database } from '../../services/firebase'

import toast from 'react-hot-toast'
import { useEffect, useState } from 'react'

type FirebaseQuestions = Record<
  string,
  {
    author: {
      name: string
      avatar: string
    }
    content: string
    isAnswered: boolean
    isHighlighted: boolean
  }
>

type Question = {
  id: string
  author: {
    name: string
    avatar: string
  }
  content: string
  isAnswered: boolean
  isHighlighted: boolean
}

type RoomParams = {
  id: string
}

type FormData = {
  newQuestion: string
}

export function Room() {
  const { register, handleSubmit, reset } = useForm<FormData>()
  const { user } = useAuth()

  const params = useParams<RoomParams>()

  const [questions, setQuestions] = useState<Question[]>([])
  const [title, setTitle] = useState('')

  const isAuthenticated = !!user
  const roomId = params.id

  useEffect(() => {
    const roomRef = database.ref(`/rooms/${roomId}`)

    roomRef.on('value', room => {
      const databaseRoom = room.val()
      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {}

      const parsedQuestions = Object.entries(firebaseQuestions).map(
        ([key, value]) => {
          return {
            id: key,
            content: value.content,
            author: value.author,
            isHighlighted: value.isAnswered,
            isAnswered: value.isAnswered,
          }
        }
      )

      setTitle(databaseRoom.title)
      setQuestions(parsedQuestions)
    })
  }, [roomId])

  async function handleSendQuestion(data: FormData) {
    const { newQuestion } = data

    if (!newQuestion) {
      toast.error('Digite algo na caixa de perguntas')
      return
    }

    if (!isAuthenticated) {
      toast.error('Você precisa fazer o login para mandar uma pergunta.')
      return
    }

    const question = {
      content: newQuestion,
      author: {
        name: user?.name,
        avatar: user?.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    }

    await database.ref(`rooms/${roomId}/questions`).push(question)

    reset()
  }

  return (
    <PageRoom>
      <header>
        <div>
          <img src={LogoImg} alt='Letmeask' />
          <RoomCode code={roomId} />
        </div>
      </header>

      <Content>
        <RoomTitle>
          <h1>Sala {title}</h1>
          {questions.length && <span>{questions.length} perguntas(s)</span>}
        </RoomTitle>

        <form onSubmit={handleSubmit(handleSendQuestion)}>
          <textarea
            placeholder='O que você quer perguntar?'
            {...register('newQuestion')}
          />

          <FormFooter>
            {isAuthenticated ? (
              <UserInfo>
                <img src={user?.avatar} alt={user?.name} />
                <span>{user?.name}</span>
              </UserInfo>
            ) : (
              <span>
                Para enviar uma pergunta
                <button>faça seu login</button>
              </span>
            )}

            <Button type='submit' disabled={!isAuthenticated}>
              Enviar pergunta
            </Button>
          </FormFooter>
        </form>
        {JSON.stringify(questions)}
      </Content>
    </PageRoom>
  )
}
