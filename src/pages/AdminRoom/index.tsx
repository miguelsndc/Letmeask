import { useHistory, useParams } from 'react-router-dom'
import Modal from 'react-modal'

import { RoomCode } from '../../components/RoomCode'
import { Question } from '../../components/Question'
import { Button } from '../../components/Button'

import { database } from '../../services/firebase'

import { useRoom } from '../../hooks/useRoom'

import LogoImg from '../../assets/images/logo.svg'
import CheckImg from '../../assets/images/check.svg'
import AnswerImg from '../../assets/images/answer.svg'
import DeleteImg from '../../assets/images/delete.svg'

import * as S from '../../styles/pages/Room'

type RoomParams = {
  id: string
}

Modal.setAppElement('#confirmModal')

export function AdminRoom() {
  const params = useParams<RoomParams>()
  const history = useHistory()

  const roomId = params.id

  const { questions, title } = useRoom(roomId)

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    })
    history.push('/')
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm('Tem certeza que você deseja excluir esta pergunta?'))
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    })
  }

  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    })
  }

  return (
    <S.PageRoom>
      <header>
        <div>
          <img src={LogoImg} alt='Letmeask' />
          <div>
            <RoomCode code={roomId} />
            <Button variant='outlined' onClick={handleEndRoom}>
              Encerrar Sala
            </Button>
          </div>
        </div>
      </header>

      <S.Content>
        <S.RoomTitle>
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </S.RoomTitle>

        <S.QuestionList>
          {questions.length > 0 &&
            questions.map(question => {
              return (
                <Question
                  key={question.id}
                  content={question.content}
                  author={question.author}
                  isAnswered={question.isAnswered}
                  isHighlighted={question.isHighlighted}
                >
                  {question.isAnswered || (
                    <>
                      <button
                        type='button'
                        onClick={() =>
                          handleCheckQuestionAsAnswered(question.id)
                        }
                      >
                        <img
                          src={CheckImg}
                          alt='Marcar pergunta como respondida'
                        />
                      </button>
                      <button
                        type='button'
                        onClick={() => handleHighlightQuestion(question.id)}
                      >
                        <img src={AnswerImg} alt='Dar destaque a pergunta' />
                      </button>
                    </>
                  )}
                  <button
                    type='button'
                    onClick={() => handleDeleteQuestion(question.id)}
                  >
                    <img src={DeleteImg} alt='Excluir Pergunta' />
                  </button>
                </Question>
              )
            })}
        </S.QuestionList>
      </S.Content>
    </S.PageRoom>
  )
}
