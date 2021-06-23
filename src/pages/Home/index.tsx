import { useHistory } from 'react-router-dom'

import { Button } from '../../components/Button/'

import {
  PageAuth,
  MainContent,
  Separator,
  CreateRoomBtn,
} from '../../styles/pages/shared'

import { useAuth } from '../../hooks/useAuth'

import IllustrationImg from '../../assets/images/illustration.svg'
import GoogleIconImg from '../../assets/images/google-icon.svg'
import LogoImg from '../../assets/images/logo.svg'
import EnterRoomIconImg from '../../assets/images/enter.svg'

export function Home() {
  const history = useHistory()
  const { signInWithGoogle, user } = useAuth()

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

          <form>
            <input type='text' placeholder='Digite o código da sala' />
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
