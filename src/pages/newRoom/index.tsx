import IllustrationImg from '../../assets/images/illustration.svg'
import LogoImg from '../../assets/images/logo.svg'
import EnterRoomIconImg from '../../assets/images/enter.svg'

import { Button } from '../../components/Button/'

import { PageAuth, MainContent } from '../../styles/pages/shared'

export function NewRoom() {
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
          <h2>Criar uma nova Sala</h2>
          <form>
            <input type='text' placeholder='Nome da Sala' />
            <Button type='submit'>
              <img src={EnterRoomIconImg} alt='Criar sala' />
              Criar sala
            </Button>
          </form>
          <p>
            Quer entrar em uma sala já existente? <a href='/'>Clique aqui</a>{' '}
          </p>
        </MainContent>
      </main>
    </PageAuth>
  )
}
